const tips = [5, 10, 15, 20];

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
