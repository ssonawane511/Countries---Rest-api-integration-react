import React, { useContext, useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {countriesContext} from "../context/index"
import CountriesCard from "../components/CountriesCard"

const Home = (props) => {
    const { getCountries, countries } = useContext(countriesContext)
    const [countriesData, setCountriesData] = useState([])
    const countriesCallback = useCallback( async () => {
       getCountries() 
    },[])

    useEffect(()=>{
        countriesCallback();
    }, [])

    return(
        <div className="home-wrap flex flex-jca">
            <SearchCountries />
            {
            countries.map(c => (<CountriesCard {...c} key={c.flag}/>))
            }
        </div>
    )
}

export default Home;