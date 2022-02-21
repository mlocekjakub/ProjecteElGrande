import React from 'react';

function Info(props) {
    return (<p>
            <span>{props.label}:</span> <span>{props.text}</span></p>
    );
}

export default Info;