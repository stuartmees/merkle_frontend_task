import React from 'react'

class Table extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            page: 0
        }
    }

    componentDidMount() {
        this.buildTableArrays()
    }

    buildTableArrays = () => {

        let flatValuesArray = []
        let valuesArray=[[],[],[]]
        let totalsArray=['30 Day Total', 0,0,0,0]

        this.props.data.map(item => {

            const dateObj = new Date(item.date)
            const date = dateObj.toLocaleDateString('en-GB', {dateStyle:"long"})

            flatValuesArray.push(date)
            flatValuesArray.push(item.cost)
            flatValuesArray.push(item.impressions)
            flatValuesArray.push(item.clicks)
            flatValuesArray.push(item.conversions)

            totalsArray[1] += item.cost
            totalsArray[2] += item.impressions
            totalsArray[3] += item.clicks
            totalsArray[4] += item.conversions

        })

        valuesArray[0] = flatValuesArray.slice(0,50)
        valuesArray[1] = flatValuesArray.slice(50,100)
        valuesArray[2] = flatValuesArray.slice(100)

        this.setState({ 
            valuesArray,
            totalsArray 
        })
    }

    changePage = (increment) => {

        if (this.state.page == 0 && increment === -1 ) return
        if (this.state.page == 2 && increment === 1 ) return

        const newPage = this.state.page + increment

        this.setState({ page: newPage })
    }

    render(){
        return(
            <section className="table">
                <header className="table__header">
                    <h2>Client Daily Advertising Summary</h2>
                    <div className='table__nav'>
                        <span onClick={() => this.changePage(-1)}>&#60;</span>
                        <span>Displaying {this.state.page*10 + 1} to {(this.state.page + 1)*10} days of 30 </span>
                        <span onClick={() => this.changePage(1)}>&#62;</span>
                    </div>
                </header>

                <div className="table__grid">
                    <span className="grid__item grid__header">Date</span>
                    <span className="grid__item grid__header">Cost (£)</span>
                    <span className="grid__item grid__header">Impressions</span>
                    <span className="grid__item grid__header">Clicks</span>
                    <span className="grid__item grid__header">Conversions</span>
                    {this.state.valuesArray && this.state.valuesArray[this.state.page].map(item => <span className="grid__item">{item}</span>)}
                </div>

                <div className="table__grid ">
                    {this.state.totalsArray && this.state.totalsArray.map(total => <span className="grid__item grid__item--emphasis">{total}</span>)}
                </div>


            </section>
        )
    }

}

export default Table




