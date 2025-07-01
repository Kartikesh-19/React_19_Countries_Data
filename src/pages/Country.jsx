import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layouts/CountryCard";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
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
  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {Array.isArray(countries) &&
          countries?.map((currentCountry) => {
            return <CountryCard country={currentCountry} />;
          })}
      </ul>
    </section>
  );
};

export default Country;
