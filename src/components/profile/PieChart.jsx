import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import formatDate from '../../helpers/formatDate'

class PieChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dateIndex: 0
        }
    }

    getChartData = (index) => {
        const impressions = this.props.data[index]['impressions']
        const clicks = this.props.data[index]['clicks']
        const conversionRate = Math.round((clicks/impressions)*100)
        const nonConversionrate = 100 - conversionRate

        const chartData = [{
            label: '% of impressions not converted to clicks',
            id: '% of impressions not converted to clicks',
            value: nonConversionrate
        }, {
            label: '% of impressions converted into clicks',
            id: '% of impressions converted into clicks',
            value: conversionRate
        }]

        return(chartData)
    }

    setDate = (index) => {
        this.setState({ dateIndex: index })
    }

    getClickConversion = (index) => {
        const clicks = this.props.data[index]['clicks']
        const conversions = this.props.data[index]['conversions']
        const conversionRate = ((conversions/clicks)*100).toFixed(2)

        return conversionRate
    }
    
    render() {

        const { data } = this.props
        const { dateIndex } = this.state

        return (

            <section className="pie-chart">
                <header className="pie-chart__header">
                    <h2>Conversion Rates</h2>
                    <FormControl className="form">
                        <Select
                            labelId="date-select"
                            id="date-select"
                            value={dateIndex}
                        >
                            {data.map((day, index) => {
                                return (
                                    <MenuItem value={index} onClick={() => this.setDate(index)}>{formatDate(day.date)}</MenuItem>
                                )
                            })}
                        </Select>
                        <FormHelperText>Select a date to view</FormHelperText>
                    </FormControl>
                </header>

                <div className="chart">
                    <ResponsivePie
                        data={this.getChartData(dateIndex)}
                        margin={{ top: 40, right: 0, bottom: 60, left: 0 }}
                        enableRadialLabels={false}
                    />
                </div>
                
                <footer className="pie-chart__footer">
                    <p className="pie-chart__click-conv-rate">
                        Percentage of clicks converted into sales: {this.getClickConversion(dateIndex)}%
                    </p>
                    <div className="pie-chart__legend">
                        <div>% of impressions converted to clicks<div className="converted"></div></div>
                        <div>% of impressions not converted to clicks<div className="non-converted"></div></div>
                    </div>
                </footer>
            </section>
            
        )
    }
}

export default PieChart