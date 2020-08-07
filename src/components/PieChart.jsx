import React from 'react'
import { ResponsivePie } from '@nivo/pie'

class PieChart extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                  "id": "Clicks",
                  "label": "Clicks",
                  "value": 539,
                  "color": "hsl(291.2,46.1%,82.5%)"
                },
                {
                  "id": "Conversions",
                  "label": "Clicks",
                  "value": 300,
                  "color": "hsl(261.6, 51.9%, 47.3%)"
                }
            ]
        }
    }
    
    render() {
        return (

            <section className="pie-chart">
                <header className="pie-chart__header">
                    <h2>Percentage Click Conversion</h2>
                </header>

                <div className="chart">
                    <ResponsivePie
                        data={this.state.data}
                        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    />
                </div>
            </section>
            
        )
    }
}

export default PieChart