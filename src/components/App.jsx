import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';

import 'normalize.css/normalize.css'
import '../styles/styles.scss'

import Index from './Index.jsx'
import Profile from './Profile.jsx'
import NavBar from './NavBar.jsx'
import { startSetClients } from '../actions/clients.js'




class App extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }
    
      componentDidMount() {  
        if (this.props.dispatch) this.props.dispatch(startSetClients())
      }

    render() {
        return(
            <Router>
                <main>
                    <NavBar />
                    <Switch>
                        <Route path="/client/:id" component={Profile} />
                        <Route path="/" component={Index} />
                    </Switch>
                </main>
        </Router>
        )
    }
}

export default connect()(App)
