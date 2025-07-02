import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layouts/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search,setSearch]=useState()
  const [filter,setFilter]=useState("all")
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log("res", res?.data);
      if (res?.status === 200) {
        setCountries(res?.data);
      }
    });
  }, []);
  if (isPending) return <Loader />;
  const searchCountry=(country)=>{
    
    if(search) return country?.name?.common?.toLowerCase().includes(search?.toLowerCase());
    return true  
  }
  const filterRegion=(country)=>{
    console.log("filter",country?.region,filter)
    if(filter==='all') return country
    return country?.region===filter;

  }
 const filterCountries= countries.filter((country)=>searchCountry(country) && filterRegion(country))
  return (
    <section className="country-section">
      <SearchFilter {...{search,setSearch,filter,setFilter, countries,setCountries}}/>
      <ul className="grid grid-four-cols">
        {Array.isArray(filterCountries) &&
          filterCountries?.map((currentCountry,index) => {
            return <CountryCard country={currentCountry} key={index} />;
          })}
      </ul>
    </section>
  );
};

export default Country;
