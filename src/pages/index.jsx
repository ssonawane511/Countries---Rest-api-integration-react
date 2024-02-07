import React, { useContext, useCallback } from "react";
import { useState } from "react";
import {countriesContext} from "../context/index"

const Home = (props) => {
    const { getCountries } = useContext(countriesContext)
    const [countriesData, setCountriesData] = useState([])
    const countries = useCallback( async () => {
       const data = await getCountries() 
       setCountriesData(data);
    },[])
    return(
        <div>
            This is home
            {
                countriesData.map()
            }
        </div>
    )
}

export default Home;