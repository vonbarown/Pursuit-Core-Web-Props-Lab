import React from 'react';

const Donations = (props) => {
    return (
        <li className='donation-list'>
            <div className='donor'>
                <h5 className='names'>{props.name} donated ${props.amount}</h5>
                {props.blurb}
            </div>
        </li>
    )
}

export default Donations;