
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';


// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }


    render() {
        return (
            <Button label="Hello World!" />
        );
    }
}

export default App