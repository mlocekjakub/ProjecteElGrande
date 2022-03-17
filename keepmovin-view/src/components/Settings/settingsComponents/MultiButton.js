import React from 'react';



function MultiButton(props) {
    const style = {
        color: '#242626',
        border: '1px solid rgba(5, 5, 5, 0.13)',
    };
    return (
        <a onClick={props.toggleFunction}
            className="buttons" sx={ style } >{props.type}</a>
    );
}

export default MultiButton;