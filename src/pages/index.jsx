import React, { useContext, useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { countriesContext } from "../context/index"
import SearchCountries from '../components/SearchCountries'
import CountriesCard from "../components/CountriesCard"
import Header from "../components/Header";

const Home = (props) => {
    const { getCountries, countries } = useContext(countriesContext)
    const [countriesData, setCountriesData] = useState([])
    const countriesCallback = useCallback(async () => {
        getCountries()
    }, [])

    useEffect(() => {
        countriesCallback();
    }, [])

    return (
        <div>
            <Header />
            <SearchCountries />
            <div className="home-wrap flex flex-jca">
            {
                countries.map(c => (<CountriesCard {...c} key={c.flag} />))
            }
        </div>
        </div>

    )
}

export default Home;