import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>Catch of the Day</h1>
            {/*
            `this` is the component.
            `props` is the object.
            `tagline` is the variable we wish to access.
            */}
                <h3 className="tagline">{this.props.tagline}</h3>
            </header>
        )
    }
}

export default Header;
