import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios';

import 'normalize.css/normalize.css'
import '../styles/styles.scss'

import Index from './index/Index.jsx'
import Profile from './profile/Profile.jsx'
import NavBar from './common/NavBar.jsx'

const AppRouter = () => {

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

export default connect()(AppRouter)
