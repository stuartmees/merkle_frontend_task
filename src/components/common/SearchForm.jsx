import React from 'react';


const SearchForm = (props) => {

    const { onSubmit, placeholder, value, onChange } = props

    return (
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder={placeholder}
                value={value} 
                onChange={onChange} 
            />
        </form>
    )

}

export default SearchForm