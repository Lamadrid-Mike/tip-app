import "./App.scss";
import { useState } from "react";
import ListOfTips from "./components/tipList";
import BillInput from "./components/billInput";
import NumberOfPeople from "./components/numberOfPeople";
import { extractNumber, insertDecimal, tipResult } from "./utils/utilFunctions";

function App() {
  const [billData, setBillData] = useState("");
  const [tip, setTip] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  let displayTip = tipResult(insertDecimal(tip), billData).toFixed(2);
  let tipAmount = Math.floor(displayTip / numberPeople).toFixed(2);
  let totalPerson = billData / numberPeople;

  const clearInputs = () => {
    let billInput = document.querySelector(".bill-input__user-data");
    let peopleNumber = document.querySelector(".number-of-people__input");
    billInput.value = "";
    peopleNumber.value = "";
    setBillData("");
    setNumberPeople("");
  };

  return (
    <div className="App">
      <BillInput setBill={(e) => setBillData(e.target.value)} />
      <label>Select tip %</label>
      <div className="select-tip">
        <ListOfTips
          setTip={(e) => {
            setTip(extractNumber(e.target.value));
          }}
        />
      </div>
      <NumberOfPeople
        setPeople={(e) => setNumberPeople(e.target.value)}
        nPeople={numberPeople}
        tipPerson={tipAmount}
        displayTip={isFinite(totalPerson) ? totalPerson.toFixed(2) : "0.00"}
        resetBtn={clearInputs}
      />
    </div>
  );
}

export default App;
