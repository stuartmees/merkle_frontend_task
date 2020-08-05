import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../actions/profile.js'

class Profile extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }

    updateProfile = () => {
        const clientID = this.props.match.params.id

        if (this.props.dispatch) this.props.dispatch(startSetProfile(clientID))
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate() {
        this.updateProfile()
    }

    render() {
        return(<h1>Profile: {this.props.match.params.id}</h1>) 
    }
}

export default connect()(Profile)