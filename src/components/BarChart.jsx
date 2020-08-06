import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import config from '../config/chartConfig'



class BarChart extends React.Component {

    constructor(){
        super()
        this.state = {
            dateRange: "7",
            chartData: ''
        }
    }

    componentDidMount() {
        this.getBarChartData()
    }


    getBarChartData = () => {

        const reducedDataArray = this.props.data.slice(this.props.data.length-this.state.dateRange)

        const chartData = reducedDataArray.map((item) => {

            const dateObj = new Date(item.date)

            const dateLabel = dateObj.toLocaleDateString('en-GB', {month:"short", day:"2-digit"})

            console.log(dateLabel)

            return {
                cost: item.cost,
                date: item.date,
                dateLabel: dateLabel 
            }

        })

        this.setState({
            chartData
        }) 
    }

    setDateRange = (dateRange) => {
        this.setState({ dateRange }, this.getBarChartData() )
    }


    render() {
        return (
            <section className="bar-chart">

                <header className="bar-chart__header">
                    <h2>Client Budget Spending</h2>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="date-range" name="dateRange" value={this.state.dateRange} >
                            <FormControlLabel value="30" control={<Radio />} label="Last 30 days" onClick={()=>this.setDateRange("30")}/>
                            <FormControlLabel value="21" control={<Radio />} label="Last 21 days" onClick={()=>this.setDateRange("21")}/>
                            <FormControlLabel value="14" control={<Radio />} label="Last 14 days" onClick={()=>this.setDateRange("14")}/>
                            <FormControlLabel value="7" control={<Radio />} label="Last 7 days" onClick={()=>this.setDateRange("7")}/>
                        </RadioGroup>
                    </FormControl>
                </header>


                {this.state.chartData && 
                <div className="chart">
                    <ResponsiveBar
                        data={this.state.chartData}
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
                }

            </section>
        )
    }
}

export default BarChart