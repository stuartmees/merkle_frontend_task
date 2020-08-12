import React from 'react'
import formatDate from '../../helpers/formatDate'

class Table extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
    }


    getTotalsArray = (data) => {
        let totalsArray=['30 Day Total', 0,0,0,0]
        const keys = ['cost', 'impressions', 'clicks', 'conversions']

        keys.forEach((key, index) => {

            totalsArray[index+1] = data.reduce((total, item) => {
                return total + item[key]
            },0)

        })

        return totalsArray
    }

    changeTablePage = (increment) => {
        if (this.state.page == 1 && increment === -1 ) return
        if (this.state.page == 3 && increment === 1 ) return

        const newPage = this.state.page + increment

        this.setState({ page: newPage })
    }

    render(){

        const { page } = this.state
        const { data } = this.props
        const startIndex = (page-1)*10
        const endIndex = page*10

        return(
            <section className="table">
                <header className="table__header">
                    <h2>Client Daily Advertising Summary</h2>
                    <div className='table__nav'>
                        <span className="table__nav__arrow" onClick={() => this.changeTablePage(-1)}>&#60;</span>
                        <span>Displaying {startIndex+1} to {endIndex} days of 30 </span>
                        <span className="table__nav__arrow" onClick={() => this.changeTablePage(1)}>&#62;</span>
                    </div>
                </header>

                <div className="table__grid">
                    <span className="grid__item grid__header">Date</span>
                    <span className="grid__item grid__header">Cost (£)</span>
                    <span className="grid__item grid__header">Impressions</span>
                    <span className="grid__item grid__header">Clicks</span>
                    <span className="grid__item grid__header">Conversions</span>
                    {data && data.slice(startIndex, endIndex).map((day, index) => {
                        return(
                            <React.Fragment key={index}>
                                <span className="grid__item">{formatDate(day.date)}</span>
                                <span className="grid__item">{day.cost}</span>
                                <span className="grid__item">{day.impressions}</span>
                                <span className="grid__item">{day.clicks}</span>
                                <span className="grid__item">{day.conversions}</span>
                            </React.Fragment>
                        )
                    })}
                </div>

                <div className="table__grid ">
                    {this.getTotalsArray(data).map((total, index) => <span key={index} className="grid__item grid__item--emphasis">{total}</span>)}
                </div>
            </section>
        )
    }
}

export default Table




