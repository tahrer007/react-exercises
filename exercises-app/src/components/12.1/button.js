const Btn = ({ text, callBack }) => {
  return (
    <button onClick={(e) => callBack(e.target.textContent)}>{text}</button>
  );
};

export default Btn;
