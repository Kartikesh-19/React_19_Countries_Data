import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryIndData } from '../api/postApi'
import Loader from '../components/UI/Loader'
import SingleCountryCard from '../components/Layouts/SingleCountryCard'

const CountryDetails = () => {
    const {id=null}=useParams()
    console.log('first', id)

     const [isPending, startTransition] = useTransition();
      const [country, setCountry] = useState([]);
      console.log('country',country )
      useEffect(() => {
        startTransition(async () => {
          const res = await getCountryIndData(id);
          console.log("res", res?.data);
          if (res?.status === 200) {
            setCountry(res?.data);
          }
        });
      }, []);
      if (isPending) return <Loader />;
  return (
     <section className="country-section">
      <ul className="grid">
        {Array.isArray(country) &&
          country.map((currentCountry) => {

            console.log(currentCountry, "currentCountry")
            return <SingleCountryCard country={currentCountry} />;
          })}
      </ul>
    </section>
  )
}

export default CountryDetails