const tips = [10, 15, 20, 25];
const ListOfTips = (props) => {
  return tips.map((el, i) => {
    return (
      <label key={i}>
        <input
          type="button"
          className="select-tip__input"
          name="select-tip"
          value={el + "%"}
          onClick={props.setTip}
        />
      </label>
    );
  });
};

export default ListOfTips;
