import React from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
    render() {
        // return some jsx
        // Let's enter some jsx comments
        return (
            <form className="store-selector">
            {/*
                This weird abomination is a jsx comment!

                And the fun thing is that this comment cannot be adjacent to
                the top level container element either. It should be wrapped
                inside it too!
            */}
                <h2>Please Enter A Store...</h2>
                <input type="text" required placeholder='Store Name' />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;
