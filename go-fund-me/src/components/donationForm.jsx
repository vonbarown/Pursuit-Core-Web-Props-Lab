import React from 'react'

const Form = (props) => {

    const handleSubmit = (event) => event.preventDefault();
    // const handleInputChange = (event) => {
    //     const id = event.target.id;
    //     const value = event.target.value
    //     props.handleInput(id, value)
    // }

    // const handleAddDonation = () => {
    //     props.submitForm()
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className="donation-name">
                <div className='donatorName'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" value={props.name} />
                </div>
                <div className='captionDiv'>
                    <label htmlFor='caption'>Caption</label>
                    <input type="text" id="caption" value={props.caption} />
                </div>
                <div className='submitDiv'>
                    <label htmlFor='amountInput'>Amount to Donate</label>
                    <input type="range" name='monies' id="amount" min="5" max="1000" value={props.amount} />
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