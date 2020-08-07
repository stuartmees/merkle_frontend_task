import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    constructor(){
        super()
        this.state = {
        }
      }

    render() {
        return(
        <nav className="nav-bar">
            <Link to={`/`}>
                <h1>Merkle</h1>
            </Link>
        </nav>
        ) 
    }
}

export default NavBar