import React from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import SearchForm from '../common/SearchForm'
import setClientFilter from '../../actions/filters'

class NavBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ searchTerm : ''}, this.props.history.push('/'))
    }

    handleChange = (searchTerm) => {
        this.setState({ searchTerm },() => this.props.dispatch(setClientFilter(searchTerm)))
    }

    render() {

        return(
            <nav className="nav-bar">
                <Link to={`/`}>
                    <h1>Merkle</h1>
                </Link>
                {this.props.history.location.pathname!=="/" && 
                    <SearchForm 
                        onChange={(e) => this.handleChange(e.target.value)} 
                        value={this.state.searchTerm} 
                        onSubmit={(e) => this.handleSubmit(e)} 
                        placeholder=" Search for another client..." 
                    />}
            </nav>
        )
    }
 
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(withRouter(NavBar));