import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchForm from '../common/SearchForm'
import setClientFilter from '../../actions/filters'

class NavBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

        handleSubmit = (e) => {
            e.preventDefault()
            console.log('submitted')
            // console.log(props.filters)
            console.log(this.state.value)
            this.props.dispatch(setClientFilter(this.state.value))
        }

        handleChange = (value) => {
            console.log('change')
            console.log(value)
            this.setState({value})
        }

        render() {
            return(
                <nav className="nav-bar">
                    <Link to={`/`}>
                        <h1>Merkle</h1>
                    </Link>
                    <SearchForm onChange={(e) => this.handleChange(e.target.value)} value={this.state.value} onSubmit={(e) => this.handleSubmit(e)} />
                </nav>
            )
        }
 
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(NavBar);