import { createContext } from "react";
import { getCountries } from '../utils/api';

export const countriesContext = createContext();

const countriesProvider = (props) => {
    const handleGetCountriesData = async (pageId) => {
        try{
            let response = await getCountries(pageId);
            return response;
        }catch (error) {
            console.error(error);
        }    
    }

    return <countriesContext.Provider
                value={{
                    getCountries: handleGetCountriesData
                }}>    
                {props.children}
            </countriesContext.Provider>
}

export default countriesProvider;