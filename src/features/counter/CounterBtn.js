const CounterBtn = ({ className, onClick, tag }) => {
  return (
    <button className={className} onClick={onClick}>
      {tag}
    </button>
  );
};

export default CounterBtn;
