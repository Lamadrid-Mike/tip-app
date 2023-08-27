const BillInput = (props) => {
  return (
    <div className="bill-input">
      <label>
        Bill
        <br />
        <input
          ref={props.ref}
          placeholder="$"
          className="bill-input__user-data"
          name="bill-input"
          onChange={props.setBill}
        ></input>
      </label>
    </div>
  );
};

export default BillInput;
