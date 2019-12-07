import React from 'react'


const Form = (props) => {

    const handleSubmit = (event) => event.preventDefault();


    return (
        <form onSubmit={handleSubmit}>
            <div className="donation-name">
                <div className='donatorName'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" name='name' value={props.name} onChange={props.handleChange} />
                </div>
                <div className='captionDiv'>
                    <label htmlFor='blurb'>Caption</label>
                    <input type="text" id="blurb" name='blurb' value={props.blurb} onChange={props.handleChange} />
                </div>
                <div className='submitDiv'>
                    <label htmlFor='amountInput'>Amount to Donate</label>
                    <input type="range" name='monies' id="amount" min="5" max="1000" value={props.amount} onChange={props.handleChange} />
                    <div className="submit-button">
                        <p className='amount'>$ {props.amount}</p>
                        <button type="button" className="donate button">Donate</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;