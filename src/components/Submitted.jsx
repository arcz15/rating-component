import React from 'react';
import './Submitted.style.scss';
import thankYou from '../assets/illustration-thank-you.svg';

const Submitted = ({ selected }) => {

    return (
        <div className='submitted-component submitted-appear'>
            <div>
                <img src={thankYou} alt='Thank You' />
            </div>
            <p className='selected-info'>You selected {selected || 5} out of 5</p>
            <h1>Thank you!</h1>
            <p className='bottom-text'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    )
}

export default Submitted