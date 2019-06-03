import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="title">
            <strong>Lambda School</strong>
            <span className="pale">@LambdaSchool</span>
            <span className="pale">26 Jan</span>
        </div>
    );
}

export default HeaderTitle;