import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../../actions/profile.js'
import BarChart from './BarChart'
import Table from './Table'
import PieChart from './PieChart'
import ErrorMsg from '../common/ErrorMsg'

class Profile extends React.Component {

    updateProfile = () => {
        const clientID = this.props.match.params.id

        if (this.props.dispatch) this.props.dispatch(startSetProfile(clientID))
    }

    componentDidMount() {
        this.updateProfile()
    }

    render() {

        const { profile, errors } = this.props

        const message = 'Sorry, there has been a problem getting this profile. Please try again later.'

        return(
                <div className="profile">

                    {errors==="profile" && !profile && <ErrorMsg message={message} />}

                    {!profile && !errors && <h1 className="loading">Loading profile...</h1>}

                    {profile && !errors && 
                        <>
                        <header className="profile__header">
                            <h1>{profile.name}</h1>
                            <img src={profile.logo} alt="company logo"></img>
                        </header>                
        

                        <BarChart data={profile.data}/>

                        <Table data={profile.data}/>

                        <PieChart data={profile.data}/>
                        </>
                    } 
     
                </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        errors: state.errors
    }
}

export default connect(mapStateToProps)(Profile);

