import React from 'react';
import { connect } from 'react-redux'
import IndexItem from './IndexItem';
import getVisibleClients from '../selectors/clients'
import setClientFilter from '../actions/filters'

const Index = (props) => {

    return(
        <div className="index">

            <header className="index__header">
                <h1>Client Index</h1>
                <input 
                    type="text"
                    placeholder=" Search for your client" 
                    value={props.filters.searchTerm} 
                    onChange={(e) => {
                        props.dispatch(setClientFilter(e.target.value))
                    }} 
                />
            </header>

            {props.clients.map(client => <IndexItem client={client} key={client.id}/>)}
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