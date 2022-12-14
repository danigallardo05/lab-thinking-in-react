import { useState } from "react";

const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.handleSearch(e.target.value)
    };

    return (
        <div>       
            
                <label><h4>Search</h4></label>
                <input value={search} onChange={handleSearch} type='text'/>
            
        </div>
    );
}

export default SearchBar;
