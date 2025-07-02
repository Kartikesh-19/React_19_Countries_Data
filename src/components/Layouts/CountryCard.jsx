import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const CountryCard = ({country:{flags,population,name,region,capital,id }}) => {
    console.log("flag", flags,population,name)
    const location=useLocation()
    
  return (
    <li key={id} className='country-card card'>
        <div className='container-card bg-white-box'> 
            <img 
            src={flags?.svg} 
            alt={flags?.alt}/>
            <div className='countryInfo'>
                <p className='card-title'>{name?.common.length>10?name?.common.substring(0,10)+"...":name?.common}</p>
                <p><span className='card-description'>Population:</span> &nbsp;{population.toLocaleString()}</p>
                <p><span className='card-description'>Region:</span>&nbsp;{region}</p>
                <p><span className='card-description'>Capital:</span>&nbsp;{capital[0]}</p>

            </div>
            <NavLink to={`${location?.pathname}/${name?.common}`}>

            <button>
              Read More
            </button>
            </NavLink>
            {/* <span>{population}</span>
            <span>{name?.common}</span>
            <span></span> */}
        </div>
        {/* {country?.name?.common} */}
    </li>
  )
}

export default CountryCard