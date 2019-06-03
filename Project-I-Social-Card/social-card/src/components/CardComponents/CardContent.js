import React from 'react';
import './Card.css';

function CardContent() {
    return (
        <div className="text2">
            <strong>Get started with React</strong>
            <p>
                React makes it painless to create interactive UIs. 
                Design simple views for each state in your application.
            </p>
            <span className="pale">reactjs.org</span>
        </div>
    );
}

export default CardContent;