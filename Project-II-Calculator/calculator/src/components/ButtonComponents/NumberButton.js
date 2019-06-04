import React from 'react';
import './Button.css';

function NumberButton() {
    return (
        <div className="number">
            <div className="btn btn2"><span>clear</span></div>
            <div className="btn"><span>7</span></div>
            <div className="btn"><span>8</span></div>
            <div className="btn"><span>9</span></div>
            <div className="btn"><span>4</span></div>
            <div className="btn"><span>5</span></div>
            <div className="btn"><span>6</span></div>
            <div className="btn"><span>1</span></div>
            <div className="btn"><span>2</span></div>
            <div className="btn"><span>3</span></div>
            <div className="btn btn2"><span>0</span></div>
        </div>
    );
}

export default NumberButton;