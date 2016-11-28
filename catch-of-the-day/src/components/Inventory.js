import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                <p>Inventory</p>
                <AddFishForm addFish={this.props.addFish} />
                { /* "loadSamples() method should go where our state lives" */ }
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;
