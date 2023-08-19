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

  let displayTip = tipResult(insertDecimal(tip), billData).toFixed(2);
  let tipAmount = Math.round(displayTip / numberPeople).toFixed(2);
  let totalPerson = billData / numberPeople;

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
        tipPerson={tipAmount}
        displayTip={isFinite(totalPerson) ? totalPerson.toFixed(2) : "0.00"}
      />
    </div>
  );
}

export default App;
