import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';

import Index from './Index.jsx'
import Profile from './Profile.jsx'
import { startSetClients } from '../actions/clients.js'




class App extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }
    
      componentDidMount() {
        //   console.log('in CDM')
        //   axios.get('/api/clients')
        //     .then(clients => {
        //         console.log('in axios in CDM')
        //         this.setState({clients: clients.data})
        //     })
        //     .catch(err => {
        //         this.setState({ error: err })
        //     })    
        if (this.props.dispatch) this.props.dispatch(startSetClients())
      }

    render() {
        return(
            <Router>
                <main>
                    <Switch>
                        <Route path="/index" component={Index} />
                        <Route path="/profile/:id" component={Profile} />
                    </Switch>
                </main>
        </Router>
        )
    }
}

export default connect()(App)
