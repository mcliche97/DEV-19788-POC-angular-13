import React from 'react';
import ReactDOM from 'react-dom';

// From: https://reintech.io/blog/how-to-use-react-with-webpack
const App = () => {
    return (
        <div>
            <h1>Hello, React with Webpack!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));