import React from 'react';
import { Link } from 'react-router-dom'

const IndexItem = (props) => {

    return(
        <Link to={`/profile/${props.client.id}`}>
            <div className="index__item">
                <h2>{props.client.name}</h2>
                <img src={props.client.logo} alt="company logo"></img>
            </div>
        </Link>
    )
}

export default IndexItem
