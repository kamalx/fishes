import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor() {
        super();
        // getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        // update state
        const fishes = {...this.state.fishes}; // this is passed to setState in the end
        // add in our new fish
        // we'll use a timestamp as a key to identify a new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;

        // set state
        this.setState({ fishes: fishes });
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    { /* scaffold for the app */ }
                    <Header tagline="Fresh Sea Food Market" />
                </div>
                <Order/>
                <Inventory/>
            </div>
        )
    }
}

export default App;
