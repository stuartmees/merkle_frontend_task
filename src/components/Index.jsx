import React, { useState } from 'react';
import { connect } from 'react-redux'
import IndexItem from './IndexItem';
import getVisibleClients from '../selectors/clients'
import setClientFilter from '../actions/filters'


const Index = (props) => {

    const { clients, filters, dispatch } = props
    
    const handleSetClientFilter = (value) => {
        dispatch(setClientFilter(value))
    }

    return(
        <div className="index">

            <header className="index__header">
                <h1>Client Index</h1>
                {filters.searchTerm && <button onClick={() => handleSetClientFilter('')}>Clear Search</button>}   
                <input 
                    type="text"
                    placeholder=" Search for your client" 
                    value={filters.searchTerm} 
                    onChange={(e) => handleSetClientFilter(e.target.value)} 
                />
            </header>

            {clients.map(client => <IndexItem client={client} key={client.id}/>)}

            {clients.length===0 && filters.searchTerm && <div className="index__no-clients"><p>Sorry, no clients match your search term.</p></div>}

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        clients: getVisibleClients(state.clients, state.filters.searchTerm),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(Index);