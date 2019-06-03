import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="title">
            <strong>Lambda School</strong>
            <span className="pale">@LambdaSchool</span>
            <span className="pale">3 June</span>
        </div>
    );
}

export default HeaderTitle;