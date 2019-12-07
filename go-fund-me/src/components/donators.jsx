import React from 'react';

const Donors = (props) => {
    return (
        <li className='donor-list'>
            <div className='donor'>
                <h5 className='names'>{props.name} donated ${props.amount}</h5>
                <p>{props.blurb}</p>
            </div>
        </li>
    )
}

export default Donors;