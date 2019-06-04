import React from 'react';
import './Header.css';
import Img from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'

function HeaderContainer() {
    return (
        <div className="head">
            <Img />
            <div className="text">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;