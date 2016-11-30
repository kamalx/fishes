import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    render() {
        const { details, index } = this.props; // ref: destructuring in ES6
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add to Order': 'Sold Out';

        // the above statement is equivalent to writing
        // const details = this.props.details;
        return(
            <li className="menu-fish">
                <img src={ details.image } alt={ details.desc } />
                <h3 className="fish-name">
                    { details.name }
                    <span className="price">{ formatPrice(details.price) }</span>
                </h3>
                <p>{ details.desc }</p>
                <button disabled={!isAvailable}
                        onClick={() => this.props.addToOrder(index) }>{ buttonText }</button>
            </li>
        );
    }
}

export default Fish;
