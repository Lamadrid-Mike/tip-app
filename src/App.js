import "./App.scss";
import { useState } from "react";
import ListOfTips from "./components/tipList";

function App() {
  const [billData, setBillData] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);

  return (
    <div className="App">
      <div className="bill-input">
        <label>
          Bill
          <br />
          <input
            placeholder="$"
            className="bill-input__user-data"
            name="bill-input"
            onChange={(e) => setBillData(e.target.value)}
          ></input>
        </label>
      </div>
      <label>Select tip %</label>
      <div className="select-tip">
        <ListOfTips setTip={(e) => setTip(e.target.value)} />
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
