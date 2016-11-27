import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch of the Day</h1>
                <h3 className="tagline">Fill me in</h3>
            </header>
        )
    }
}

export default Header;
