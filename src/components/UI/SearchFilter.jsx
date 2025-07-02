import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries }) => {
 const arrayList = countries.filter((country, index) =>
  countries.findIndex(c => c.region === country.region) === index
);


//   const filterUniVal=arrayList.map
  console.log("countries", arrayList?.region);
  const handleInputChange = (event) => {
    setSearch(event?.target?.value);
  };
  const handleSelectChange = (event) => {
    console.log("event", event?.target?.value)
    setFilter(event?.target?.value);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          {Array.isArray(arrayList) &&
            arrayList?.map((country, index) => (
              <option key={index} value={country?.region}>
                {country?.region}
              </option>
            ))}
          {/* <option value="all">All</option> */}
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
