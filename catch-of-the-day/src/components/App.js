import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

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
        this.setState({ fishes });
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market" />
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
