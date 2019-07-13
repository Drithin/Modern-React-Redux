//Import React and ReactDOM Libs
import React from 'react';
import ReactDOM from 'react-dom'

const getButtonText = () => {
    return 'Click on me!'
}

//Create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">
            Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        </div>
    )
};

//Take a react component and share it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);