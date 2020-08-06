import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

import config from '../config/chartConfig'



class BarChart extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }


    render() {
        return (
            <div className="chart">
                <ResponsiveBar
                    data={this.props.data}
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