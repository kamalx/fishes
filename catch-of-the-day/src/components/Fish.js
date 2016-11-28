import React from 'react';

class Fish extends React.Component {
    render() {
        const { details } = this.props; // ref: destructuring in ES6
        // the above statement is equivalent to writing
        // const details = this.props.details;
        return(
            <li className="menu-fish">
                <img src={ details.image } alt={ details.desc } />
                <h3 className="fish-name">
                    { details.name }
                    <span className="price">{ details.price }</span>
                </h3>
                <p>{ details.desc }</p>
                <button>Add to Order</button>
            </li>
        );
    }
}

export default Fish;
