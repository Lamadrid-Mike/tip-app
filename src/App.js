import "./App.scss";
import { useState } from "react";
import ListOfTips from "./components/tipList";
import BillInput from "./components/billInput";

const extractNumber = (number) => {
  let pattern = /(\d+)/;
  let result = number.match(pattern);
  return result[0];
};

const insertDecimal = (number) => {
  return (number / 100).toFixed(2);
};

function App() {
  const [billData, setBillData] = useState("");
  const [tip, setTip] = useState("");
  const [numberPeople, setNumberPeople] = useState("");

  return (
    <div className="App">
      <BillInput setBill={(e) => setBillData(e.target.value)} />
      <label>Select tip %</label>
      <div className="select-tip">
        <ListOfTips setTip={(e) => setTip(extractNumber(e.target.value))} />
      </div>
      <div className="number-of-people">
        <label>
          Number of people
          <br />
          <input
            placeholder="#"
            className="number-of-people__input"
            name="people-input"
            onChange={(e) => setNumberPeople(e.target.value)}
          ></input>
        </label>
        <div className="tip-result">
          <div className="tip-result__total">
            <p className="tip_result__per-person">
              Tip Amount
              <br />
              <span>/person</span>
            </p>
            <p className="tip_result__amount-per-person total-amount">$4.27</p>
            <p className="tip_result__total">
              Total <br />
              <span>/person</span>
            </p>
            <p className="tip_result__amount-total total-amount">$32.79</p>
          </div>
          <button className="tip-result__btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
