import React from 'react';

function OptionButton(props) {
    return (
        <a onClick={props.toggleFunction}
           className="button-item" >{props.type} </a>
    );
}

export default OptionButton;