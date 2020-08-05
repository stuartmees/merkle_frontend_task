import React from 'react';
import { connect } from 'react-redux'

class Index extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }

    render() {
        return(
            <div className="index">
                <h1>Index</h1>
                {this.props.clients.map(client => (
                    <div className="index__item">
                        <h2>{client.name}</h2>
                        <img src={client.logo} alt="compnay logo"></img>
                    </div>
                )
                )}
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clients
    }
}

export default connect(mapStateToProps)(Index);