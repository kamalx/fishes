import React from 'react';
import {render} from 'react-dom';

// Converted this into a stateless functional component
// REF: https://facebook.github.io/react/docs/components-and-props.html
// Instruction video 8
const Header = (props) => {
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
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}

export default Header;
