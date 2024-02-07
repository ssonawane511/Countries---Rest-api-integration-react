import { createContext, useState } from "react";
import { getCountries } from '../utils/api';

export const countriesContext = createContext();

const countriesProvider = (props) => {
    const [countries, setCountries] = new useState([])
    const handleGetCountriesData = async (pageId) => {
        try{
            let response = await getCountries(pageId);
            setCountries(response.data)
            return response;
        }catch (error) {
            console.error(error);
        }    
    }

    return <countriesContext.Provider
                value={{
                    countries: countries,
                    getCountries: handleGetCountriesData
                }}>    
                {props.children}
            </countriesContext.Provider>
}

export default countriesProvider;