import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../actions/profile.js'
import BarChart from './BarChart'
import Table from './Table'

class Profile extends React.Component {

    constructor(){
        super()
        this.state = {
            chartRange: 14
        }
      }

    updateProfile = () => {
        const clientID = this.props.match.params.id

        if (this.props.dispatch) this.props.dispatch(startSetProfile(clientID))
    }

    componentDidMount() {
        this.updateProfile()
    }

    render() {

        const { profile } = this.props

        return(
            <div className="profile">
                <header className="profile__header">
                    <h1>{profile.name}</h1>
                    <img src={profile.logo} alt="company logo"></img>
                </header>

                {profile && profile.data && <BarChart data={profile.data}/>}

                {profile && profile.data && <Table data={profile.data}/>}
 
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

