import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';


import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

// We're adding the router component right here instead of in a new file
// for now.
// This is a stateless functional component like the one we saw in just previous
// commit.
const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match exactly pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector("#main"));
