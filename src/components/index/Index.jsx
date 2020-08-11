import React, { useState } from 'react';
import { connect } from 'react-redux';
import IndexItem from './IndexItem';
import SearchForm from '../common/SearchForm'
import ErrorMsg from '../common/ErrorMsg'
import getVisibleClients from '../../selectors/clients'
import setClientFilter from '../../actions/filters'


const Index = (props) => {

    const { clients, filters, dispatch, errors } = props
    
    const handleSetClientFilter = (value) => {
        dispatch(setClientFilter(value))
    }

    const message = 'Sorry, there has been a problem getting your list of clients. Please try again later.'

    return(
        <div className="index">
            {errors==="clients" && clients.length===0 && <ErrorMsg message={message} />}

            {errors!=='clients' &&      
                <header className="index__header">
                    <h1>Client Index</h1>
                    {filters.searchTerm && <button  onClick={() => handleSetClientFilter('')}>Clear Search</button>}

                    <SearchForm 
                        onChange={(e) => handleSetClientFilter(e.target.value)}
                        onSubmit={null} 
                        value={filters.searchTerm}
                        placeholder=" Search for your client..." 
                    />
                </header>
            }

            {errors!=='clients' && clients.length>0 && clients.map(client => <IndexItem client={client} key={client.id}/>)}

            {errors!=='clients' && clients.length===0 && filters.searchTerm && 
                <div className="index__no-clients">
                    <p>Sorry, no clients match your search term.</p>
                </div>
            }
        </div>
    )
}
 



const mapStateToProps = (state) => {
    return {
        clients: getVisibleClients(state.clients, state.filters.searchTerm),
        filters: state.filters,
        errors: state.errors
    }
}

export default connect(mapStateToProps)(Index);