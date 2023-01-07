import React from 'react';
import './App.scss';
import Rating from './components/Rating';

const App = () => {

    return (
        <React.Fragment>
            <div className='box'>
                <Rating />
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/arcz15">arcz15</a>.
            </div>
        </React.Fragment>
    )
}

export default App