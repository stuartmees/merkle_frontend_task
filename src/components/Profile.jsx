import React from 'react';
import { connect } from 'react-redux'

import { startSetProfile } from '../actions/profile.js'
import BarChart from './BarChart'

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

    getBarChartData = () => {
        console.log('getBarChartData')

        let data
        let delta
        let splitArray = []

        if (this.state.chartRange === 30) delta = 6;
        if (this.state.chartRange === 7) delta = 1;
        if (this.state.chartRange === 14) delta = 2;

        const sections = this.state.chartRange / delta;

        for (let i=0; i<sections; i++) {
            splitArray[i] = this.props.profile.data.slice(i*delta,(i+1)*delta)
        }

        const reducer = (total, item) => {
            return total + item.cost
        }

        splitArray.forEach((item, index) => {
            splitArray[index]['cost'] = item.reduce(reducer, 0)
        })

        data = splitArray.map((item) => {

            const startDateObj = new Date(item[0].date)
            const endDateObj = new Date(item[delta-1].date)

            const dateLabel = startDateObj.toLocaleDateString() + '-' + endDateObj.toLocaleDateString()

            return {
                cost: item.cost,
                date: item[0].date,
                dateLabel: dateLabel 
            }

        })

        return data
    }

    componentDidMount() {
        this.updateProfile()
    }

    render() {
        return(
            <div className="profile">
                <header className="profile__header">
                    <h1>{this.props.profile.name}</h1>
                    <img src={this.props.profile.logo} alt="company logo"></img>
                </header>

                {this.props.profile && this.props.profile.data && <BarChart data={this.getBarChartData()}/>}
 
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

