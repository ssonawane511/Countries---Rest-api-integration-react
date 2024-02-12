import React, { useState, useContext} from 'react'
import { countriesContext } from '../context'

const SearchCountries = () => {
  const { search } = useContext(countriesContext)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchCountries = (searchTerm) => {
    setSearchTerm(searchTerm)
    search(searchTerm)
  }
  return (
    <div className='search-container'> 
        <input type="text"  placeholder="Search countries" name="search-countries" id="search-countries" onChange={e=>handleSearchCountries(e.target.value)}/>
    </div>
   )
}

export default SearchCountries
