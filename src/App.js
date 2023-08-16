import "./App.scss";
import { useState } from "react";
import ListOfTips from "./components/tipList";
import BillInput from "./components/billInput";
import NumberOfPeople from "./components/numberOfPeople";

const extractNumber = (number) => {
  let pattern = /(\d+)/;
  let result = number.match(pattern);
  return result[0];
};

const insertDecimal = (number) => {
  return (number / 100).toFixed(2);
};

let tipResult = (a, b) => {
  let result = a * b;
  return result;
};

function App() {
  const [billData, setBillData] = useState("");
  const [tip, setTip] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  const resetBtn = (e) => {
    e.preventDefault();
    setBillData("");
    setTip("");
    setNumberPeople("");
  };

  let displayTip = tipResult(insertDecimal(tip), billData).toFixed(2);
  let tipPerPerson = Math.round(displayTip / numberPeople).toFixed(2);
  let totalPerPerson = Math.floor(billData / numberPeople);

  return (
    <div className="App">
      <BillInput setBill={(e) => setBillData(e.target.value)} />
      <label>Select tip %</label>
      <div className="select-tip">
        <ListOfTips setTip={(e) => setTip(extractNumber(e.target.value))} />
      </div>
      <NumberOfPeople
        setPeople={(e) => setNumberPeople(e.target.value)}
        nPeople={numberPeople}
        tipPerson={tipPerPerson}
        displayTip={totalPerPerson ? totalPerPerson : "0.00"}
        resetBtn={resetBtn}
      />
    </div>
  );
}

export default App;
