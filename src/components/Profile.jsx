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
        return(
            <div className="profile">
                <header className="profile__header">
                    <h1>{this.props.profile.name}</h1>
                    <img src={this.props.profile.logo} alt="company logo"></img>
                </header>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Profile);

