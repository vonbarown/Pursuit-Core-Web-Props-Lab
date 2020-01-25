import React, { useState } from "react";
import "./App.css";
import Form from "./components/donationForm";
import Donors from "./components/donators";
import ProgressBar from "./components/progressBar";
import TopBar from "./components/topBar";


const App = () => {
  const goal = 20000

  const [name, setName] = useState('')
  const [caption, setCaption] = useState('')
  const [amount, setAmount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [donations, setDonations] = useState([])


  const changeName = e => setName(e.target.value)

  const changeCaption = e => setCaption(e.target.value)

  const changeAmount = e => setAmount(e.target.value)

  const handleNewDonation = event => {
    event.preventDefault();
    let donationsArr = []
    const newDonor = { name, amount, caption };

    for (let i of donations) {
      donations.push(i)
    }
    donationsArr.push(newDonor)

    setDonations(donationsArr)
    setProgress(progress + parseInt(amount))
  };


  const listItems = donations.map(el => {
    return (
      <Donors
        key={el.name}
        name={el.name}
        amount={el.amount}
        blurb={el.caption}
      />
    );
  });

  return (
    <div className="App">

      <TopBar motivation='Help me get a Disney+ account' />

      <div className="container">
        <div className="row">
          <ul className="col-4 list-unstyled recent-donations">
            <h5>Recent Donations</h5>
            {
              listItems}
          </ul>
          <div className="col-8">

            <ProgressBar
              raised={progress}
              goal={goal}
            />
            <hr />
            <Form
              name={name}
              caption={caption}
              changeName={changeName}
              changeCaption={changeCaption}
              changeAmount={changeAmount}
              handleNewDonation={handleNewDonation}
              amount={amount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
