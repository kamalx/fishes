import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
    render() {
        console.log(this);
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day
                </h1>
            {/*
            `this` is the component.
            `props` is the object.
            `tagline` is the variable we wish to access.
            */}
                <h3 className="tagline"><span>{this.props.tagline}</span></h3>
            </header>
        )
    }
}

export default Header;
