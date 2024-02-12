import { createContext, useState } from "react";
import { getCountries, searchCountries } from '../utils/api';
import { debounce } from "../utils";

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

    const search = debounce(async (searchTerm) => {
        if(searchTerm === ''){ handleGetCountriesData(); return;}
        try {
            let response = await searchCountries(searchTerm);
            setCountries(response.data)
        }catch (error) {
            console.error(error)
        }
    })

    return <countriesContext.Provider
                value={{
                    countries: countries,
                    getCountries: handleGetCountriesData,
                    search: search
                }}>    
                {props.children}
            </countriesContext.Provider>
}

export default countriesProvider;