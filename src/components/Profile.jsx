import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../actions/profile.js'
import BarChart from './BarChart'
import Table from './Table'
import PieChart from './PieChart'

class Profile extends React.Component {

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
                    {!profile ? <h1 className="loading">Loading profile...</h1> : 
                                <header className="profile__header">
                                    <h1>{profile.name}</h1>
                                    <img src={profile.logo} alt="company logo"></img>
                                </header>                
                    }

                    {profile && <BarChart data={profile.data}/>}
    
                    {profile && <Table data={profile.data}/>}

                    {profile && <PieChart data={profile.data}/>}
     
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

