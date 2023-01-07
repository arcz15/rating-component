import React, { useState } from 'react';
import './Rating.styles.scss';
import starIcon from '../assets/icon-star.svg';
import Submitted from './Submitted';

const Rating = () => {

    const [selected, setSelected] = useState(-1);
    const [submitted, setSubmitted] = useState(false);
    const options = [1, 2, 3, 4, 5];

    function handleSubmit() {
        if(selected === -1) return;
        setSubmitted(true);
    }

    return (
        submitted 
        ? <Submitted selected={selected}/>
        : <div className='rating-component'>
            <div className='star-icon'>
                <img src={starIcon} alt='Star Icon' width='18' height='18' />
            </div>

            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className='rating-buttons'>
                {options.map(number => (
                    <div onClick={() => setSelected(number)} className={`${selected === number && 'selected'}`} key={number}>
                        <span>{number}</span>
                    </div>
                ))}
            </div>
            <button type='submit' className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Rating