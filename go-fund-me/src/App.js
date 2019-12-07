import React from "react";
import "./App.css";
import Form from "./components/donationForm";
import Donors from "./components/donators";
import ProgressBar from "./components/progressBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      donors: [
        { name: "Voniel", amount: 450, blurb: "Help" },
        { name: "Otis", amount: 340, blurb: "look for me" },
        { name: "Frank", amount: 600, blurb: "monies" }
      ],
      name: "",
      amount: 0,
      blurb: "",
      goal: 20000,
      raised: 0
    };

    // handle change for the form
    this.handleChange = event => {
      const value = event.target.value;
      this.setState({
        ...this.prevState,
        [event.target.name]: value
      });
    };

    this.calcAmount = () => {
      this.setState({
        raised: 9000
      });
    };
  }

  //render the information to the screen
  render() {
    let { donors, goal, amount, raised } = this.state;

    console.log(this.state);
    // console.log(this.calcAmount());

    const listItems = donors.map(el => {
      return (
        <Donors
          key={el.name}
          name={el.name}
          amount={el.amount}
          blurb={el.blurb}
        />
      );
    });

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <ul className="col-4 list-unstyled recent-donations">
              <h5>Recent Donations</h5>
              {listItems}
            </ul>
            <div className="col-8">
              <ProgressBar raised={raised} goal={goal} />
              <hr />
              <Form handleChange={this.handleChange} amount={amount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
