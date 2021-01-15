import React from 'react';
import './secondscounter.js';

const SecondsCounter = (props) => {
    const salida = props.number >= 0 ? props.number : <i className={props.icon} />
    return (
        <div className=" mt-2 p-4">
            {salida}
        </div>
    );
}
export default SecondsCounter;