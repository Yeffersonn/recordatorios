import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}){


    const onSearchValueChange = ({target}) =>{
        console.log(target.value)
        setSearchValue(target.value)
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="Buscador..."
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export { TodoSearch };