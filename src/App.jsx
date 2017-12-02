import React, { Component } from 'react';
import { UIRouter, UIView } from '@uirouter/react';
import router from './router';

class App extends Component {

    render() {
        return (
            <UIRouter router={router}>
                <div>
                    <UIView/>
                </div>
            </UIRouter>
        );
    }
}

export default App;