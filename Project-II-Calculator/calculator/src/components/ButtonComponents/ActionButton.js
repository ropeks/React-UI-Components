import React from 'react';
import './Button.css';

function ActionButton() {
    return (
        <div className="action">
            <div className="btn"><span>/</span></div>
            <div className="btn"><span>*</span></div>
            <div className="btn"><span>-</span></div>
            <div className="btn"><span>+</span></div>
            <div className="btn"><span>=</span></div>
        </div>
    );
}

export default ActionButton;