const NumberOfPeople = (props) => {
  return (
    <div className="number-of-people">
      <label>
        Number of people
        <br />
        <input
          placeholder="#"
          className="number-of-people__input"
          name="people-input"
          onChange={props.setPeople}
        ></input>
      </label>
      <div className="tip-result">
        <div className="tip-result__total">
          <p className="tip_result__per-person">
            Tip Amount
            <br />
            <span>/person</span>
          </p>
          <p className="tip_result__amount-per-person total-amount">
            ${props.nPeople ? props.tipPerson : "0.00"}
          </p>
          <p className="tip_result__total">
            Total <br />
            <span>/person</span>
          </p>
          <p className="tip_result__amount-total total-amount">
            ${props.displayTip}
          </p>
        </div>
        <button onClick={props.resetBtn} className="tip-result__btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default NumberOfPeople;
