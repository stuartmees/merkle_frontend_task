import React from 'react';
import { connect } from 'react-redux'
import IndexItem from './IndexItem';

const Index = (props) => {

    return(
        <div className="index">
            <h1>Client Index</h1>
            {props.clients.map(client => <IndexItem client={client} key={client.id}/>)}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(Index);