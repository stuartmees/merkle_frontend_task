import React from 'react';
import { Link } from 'react-router-dom'

const IndexItem = (props) => {

    const { id, name, logo, key } = props.client

    return(

        <Link key={key} to={`/client/${id}`}>
            <div className="index__item">
                <h2>{name}</h2>
                <img src={logo} alt="company logo"></img>
            </div>
        </Link>

    )
}

export default IndexItem
