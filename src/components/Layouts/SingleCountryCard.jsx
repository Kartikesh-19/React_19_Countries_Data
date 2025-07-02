import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SingleCountryCard = ({
  country: {
    flags,
    population,
    name,
    region,
    capital,
    id,
    borders,
    currencies,
    languages,
  },
}) => {
  const location = useLocation();
  console.log("flag", borders, languages);

  return (
    <section key={id} className="card country-details-card container ">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img src={flags?.svg} alt={flags?.alt} />
          <div className="countryInfo">
            <p className="card-title">{name?.official}</p>
            <p>
              <span className="card-description">Population:</span> &nbsp;
              {population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">Region:</span>&nbsp;{region}
            </p>
            <p>
              <span className="card-description">Capital:</span>&nbsp;
              {capital[0]}
            </p>
            {Array.isArray(borders)?.length > 0 ? (
              <p>
                <span className="card-description">Borders:</span>&nbsp;
                {borders[0]}, {borders[2]}, {borders[3]}
              </p>
            ) : (
              <></>
            )}
            <p>
              <span className="card-description">Currency:</span>&nbsp;
              {Object.values(currencies)?.[0]?.name}
            </p>
            <p>
              <span className="card-description">Native Names:</span> &nbsp;
              {Object.keys(name?.nativeName)
                .map((key) => name.nativeName[key].common)
                .join(",\n")}
            </p>
            <p>
              <span className="card-description">Native Names:</span> &nbsp;
              {Object.keys(languages)
                ?.map((key) => languages[key])
                .join(",\n")}
            </p>
          </div>
        </div>
        {/* <span>{population}</span>
            <span>{name?.common}</span>
            <span></span> */}
      </div>
      <NavLink
        to={`/country`}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          textDecoration: "none",
        }}
      >
        <button>Go Back</button>
      </NavLink>
      {/* {country?.name?.common} */}
    </section>
  );
};

export default SingleCountryCard;
