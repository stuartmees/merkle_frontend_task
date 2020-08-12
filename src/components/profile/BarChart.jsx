import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import formatDate from '../../helpers/formatDate'
import config from '../../config/chartConfig'



class BarChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dateRange: "7",
        }
    }

    componentDidMount() {
        if (this.props.data)  this.getBarChartData(this.state.dateRange)
    }


    getBarChartData = (dateRange) => {
        const truncatedDataArray = this.props.data.slice(this.props.data.length-dateRange)

        const chartData = truncatedDataArray.map((item) => {
            const dateLabel = formatDate(item.date, false)

            return {
                cost: item.cost,
                date: item.date,
                dateLabel: dateLabel 
            }
        })

        return chartData  
    }

    setDateRange = (dateRange) => {
        this.setState({ dateRange })
    }


    render() {

        return (
                <>
                {this.props.data && 
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
        
                        <div className="chart">
                            <ResponsiveBar
                                data={this.getBarChartData(this.state.dateRange)}
                                keys={["cost"]}
                                indexBy="dateLabel"
                                margin={config.margin}
                                padding={0.3}
                                colors='nivo'
                                borderColor="inherit:darker(1.6)"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={config.axisBottom}
                                axisLeft={config.axisLeft}
                                animate={true}
                                motionStiffness={90}
                                motionDamping={15}
                                enableLabel={false}
                            />
                        </div>
                    </section>
                }
                </>
        )
    }
}

export default BarChart