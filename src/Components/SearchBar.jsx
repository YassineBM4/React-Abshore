import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input placeholder='Search Your Bank...' />
    </div>
  )
}

export default SearchBar