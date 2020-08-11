import React from 'react';


const ErrorMsg = (props) => {

    return (
        <div className="error-msg">
            <p>{props.message}</p>
        </div>
    )
    
}

export default ErrorMsg