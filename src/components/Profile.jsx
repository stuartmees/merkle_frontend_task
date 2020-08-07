import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../actions/profile.js'
import BarChart from './BarChart'
import Table from './Table'
import PieChart from './PieChart'

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

        return(
                <div className="profile">
                    {!this.props.profile ? <h1 className="loading">Loading profile...</h1> : 
                                <header className="profile__header">
                                    <h1>{this.props.profile.name}</h1>
                                    <img src={this.props.profile.logo} alt="company logo"></img>
                                </header>                
                    }

                    {this.props.profile && <BarChart data={this.props.profile.data}/>}
    
                    {this.props.profile && <Table data={this.props.profile.data}/>}

                    {this.props.profile && <PieChart />}
     
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

