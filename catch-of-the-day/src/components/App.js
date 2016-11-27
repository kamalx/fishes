import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    { /* scaffold for the app */ }
                    <Header />
                </div>
            </div>
        )
    }
}
