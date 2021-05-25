import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <h3 className={'logo'}>
                <span className={'logo-bold'}>FER</span>
                Q-Air
            </h3>
        </header>
    );
};

export default Header;