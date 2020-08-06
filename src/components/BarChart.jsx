import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import config from '../config/chartConfig'



class BarChart extends React.Component {

    constructor(){
        super()
        this.state = {
            chartRange: 30
        }
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
                splitArray[i] = this.props.data.slice(i*delta,(i+1)*delta)
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


    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={this.getBarChartData()}
                    keys={["cost"]}
                    indexBy="dateLabel"
                    margin={ 
                        {
                        "top": 50,
                        "right": 60,
                        "bottom": 100,
                        "left": 80
                        }
                    }
                    padding={0.3}
                    colors='nivo'
                    colorBy="id"
                    borderColor="inherit:darker(1.6)"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={config.axisBottom}
                    axisLeft={config.axisLeft}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="inherit:darker(1.6)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    enableLabel={false}
                />
            </div>
        )
    }
}

export default BarChart