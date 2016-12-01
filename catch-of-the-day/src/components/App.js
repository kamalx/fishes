import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

import base from '../base';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);

        if(typeof base !== 'undefined') {
            console.log("Loaded firebase configuration.");
            console.log("The firebase component exposes this object for use: ", base);
        }

        // getInitialState
        this.state = {
            fishes: {},
            order: {}
        };
    }

    componentWillMount() {
        //
        this.ref = base.syncState(`${this.props.params.storeId}/fishes`
            , {
                context: this,
                state: 'fishes'
            });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
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

    addToOrder(key) {
        // take a copy of our state
        const order = { ...this.state.order };

        // update or add the new number of fish
        order[key] = order[key] + 1 || 1;

        // update our state
        this.setState({ order });
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market" />
                    <ul className="list-of-fish">
                        {
                            // {/* `key` is passed down but not used in downstream
                            // components, so we use `index` instead - `key` is
                            // apparently used by React internally and not
                            // accessible as a `prop` */}
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key}
                                                  index={key}
                                                  details={this.state.fishes[key]}
                                                  addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;
