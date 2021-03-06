import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        // following weirdness is required to access `this` from within our
        // custom functions like our goToStore() function here.
        // #11 talks about this in detail.
        this.goToStore = this.goToStore.bind(this);
    }

    goToStore(event) {
        // the keyword `this` is accessible here AND refers to the StorePicker
        // class as expected because of the above call to .bind() in the
        // constructor() function.
        // Read more about it:
        //  https://www.sitepoint.com/bind-javascripts-this-keyword-react/
        //  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        // ---------

        event.preventDefault();
        // first: grab the text from the box
        const storeId = this.storeInput.value;
        console.log("You changed the URL to " + storeId);

        // second: we're going to transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${storeId}`);
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

// We're going to set some data in the context so that it's available globally
// to the entire application. This is not recommended and should be done with
// careful thought as globals are bad. But setting up the router, the instructions
// in #12 go straight to setting up this context.
// TODO: read more about context here:
//   - https://facebook.github.io/react/docs/context.html

StorePicker.contextTypes = {
    router: React.PropTypes
}

export default StorePicker;
