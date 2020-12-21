import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const initialState = {
    search: ''
}
const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [formValue, setFormValue] = useState(initialState)
    const handleSearch = () => {
        setSearchOpen(!searchOpen)
        setFormValue(initialState)
    }
    const handleChange = e => {
        setFormValue({ [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log("Searching")
        setSearchOpen(!searchOpen)
    }
    return (
        <form className="search" autoComplete="off" onClick={() => !searchOpen ? handleSearch() : null} >
            <div className="toggleSearch">
                <input type="text" value={formValue.search} name="search" className={searchOpen ? "openSearch" : ""} onChange={(e) => handleChange(e)} placeholder="Search" />

                <FontAwesomeIcon icon={faSearch} size="lg" onClick={(e) => searchOpen ? handleSubmit(e) : handleSearch(e)} />
            </div>
        </form>
    )
}

export default Search
