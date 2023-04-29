import React from 'react'
import { BsSearch } from 'react-icons/bs'

function SearchInput() {
  return (
    <div className='m-3 d-flex justify-content-center align-items-center'>
      <div className="col-8">
        <input
          name = "searchText"
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </div>
      <button
        className='btn btn-outline-primary col-4 d-flex justify-content-center m-1 p-2'
      >
        <BsSearch />
      </button>
    </div>
  )
}

export default SearchInput
