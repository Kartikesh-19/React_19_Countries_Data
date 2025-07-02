import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries,setCountries }) => {
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
  const sortCountries = (value) => {
    let newArr=[...countries]
   const sortedData = newArr.sort((a, b) => {
    const nameA = a?.name?.common?.toLowerCase() || '';
    const nameB = b?.name?.common?.toLowerCase() || '';

    if (value === 'asc') {
      return nameA > nameB ? 1 : nameA < nameB ? -1 : 0;
    } else {
      return nameA < nameB ? 1 : nameA > nameB ? -1 : 0;
    }
  });

    setCountries(sortedData)
    // if(value==='asc'){
    //     setCountries(countries.sort((a,b)=> a+b))
    // }else {
    //      setCountries(countries.sort((a,b)=> a-b))
    // }
   
  };

  return (
    <section className="section-searchFilter container">
        <div>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
        </div>
          <div>
           <button onClick={()=>sortCountries('asc')}>Asc</button> 
        </div>
          <div>
           <button onClick={()=>sortCountries('dec')}>Dec</button> 
        </div>
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
