import React from 'react';


const SearchForm = (props) => {

    return (
        <form onSubmit={props.onSubmit} >
            <input
                type="text"
                placeholder=" Search for your client" 
                value={props.searchTerm} 
                onChange={props.onChange} 
            />
        </form>
    )

}

export default SearchForm