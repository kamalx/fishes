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
