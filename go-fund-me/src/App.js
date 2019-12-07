import React from 'react';
import './App.css';
import Form from './components/donationForm'
import Banner from './components/topBar'
import Donors from './components/donators'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      donors: [
        { name: 'Voniel', amount: 450, blurb: 'Help' },
        { name: 'Otis', amount: 340, blurb: 'look for me' },
        { name: 'Frank', amount: 600, blurb: 'monies' }
      ],
      name: '',
      amount: 0,
      blurb: ''

    }

    this.handleChange = (event) => {
      const value = event.target.value;
      this.setState({
        ...this.prevState,
        [event.target.name]: value
      })
    }

  }





  //render the information to the screen
  render() {
    let { donors } = this.state

    console.log(this.state);

    const listItems = donors.map(el => {
      return (
        <Donors
          key={el.name}
          name={el.name}
          amount={el.amount}
          blurb={el.blurb}

        />
      )
    })

    return (
      <div className="App">

        <Banner />
        <ul>{listItems}</ul>
        <Form handleChange={this.handleChange} handleBlurb={this.handleBlurb} handleAmount={this.handleAmount} />

      </div>
    );
  }
}

export default App;
