import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        console.log("You changed the URL to {how would you get this value?}");
        event.preventDefault();
        // first: grab the text from the box
        console.log(this.storeInput); // to see if we can access the newly added ref
        // second: we're going to transition from / to /store/:storeId
    }

    render() {
        // return some jsx
        // Let's enter some jsx comments
        return (
            <form className="store-selector" onSubmit={ this.goToStore } >
            {/*
                This weird abomination is a jsx comment!

                And the fun thing is that this comment cannot be adjacent to
                the top level container element either. It should be wrapped
                inside it too!
            */}
                <h2>Please Enter A Store...</h2>
                <input type="text" required placeholder='Store Name'
                       defaultValue={ getFunName() }
                       ref={(input) => {this.storeInput = input} } />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
