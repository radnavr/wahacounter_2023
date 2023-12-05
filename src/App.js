import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import CounterBtn from "./features/counter/CounterBtn";
import DangerZone from "./features/counter/DangerZone";

function App() {
  const round = useSelector((state) => state.counter.round);
  const victoryPoints = useSelector((state) => state.counter.victoryPoints);
  const commandPoints = useSelector((state) => state.counter.commandPoints);
  const dispatch = useDispatch();

  const config = {
    roundsCountingByOnes: {
      target: "rounds",
      amount: 1,
    },
    vpsCountingByOnes: {
      target: "VPs",
      amount: 1,
    },
    vpsCountingByFives: {
      target: "VPs",
      amount: 5,
    },
    cpsCountingByOnes: {
      target: "CPs",
      amount: 1,
    },
  };

  return (
    <main>
      <h1>WAHACOUNTER</h1>

      <section>
        <h2>ROUND</h2>
        <div className="counter-container">
          <div className="single-btn-left-container">
            <CounterBtn
              className="btn btn--square btn--green"
              onClick={() => dispatch(increment(config.roundsCountingByOnes))}
              tag="+1"
            />
          </div>
          <div className="score-container">
            <span className="score">{round}</span>
          </div>
          <div className="single-btn-right-container">
            <CounterBtn
              className="btn btn--square btn--red"
              onClick={() => dispatch(decrement(config.roundsCountingByOnes))}
              tag="-1"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>VICTORY POINTS</h2>
        <div className="counter-container">
          <div className="double-btn-container">
            <CounterBtn
              className="btn btn--square btn--green"
              onClick={() => dispatch(increment(config.vpsCountingByFives))}
              tag="+5"
            />
            <CounterBtn
              className="btn btn--square btn--green"
              onClick={() => dispatch(increment(config.vpsCountingByOnes))}
              tag="+1"
            />
          </div>
          <div className="score-container">
            <span className="score">{victoryPoints}</span>
          </div>
          <div className="double-btn-container">
            <CounterBtn
              className="btn btn--square btn--red"
              onClick={() => dispatch(decrement(config.vpsCountingByOnes))}
              tag="-1"
            />
            <CounterBtn
              className="btn btn--square btn--red"
              onClick={() => dispatch(decrement(config.vpsCountingByFives))}
              tag="-5"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>COMMAND POINTS</h2>
        <div className="counter-container">
          <div className="single-btn-left-container">
            <CounterBtn
              className="btn btn--square btn--green"
              onClick={() => dispatch(increment(config.cpsCountingByOnes))}
              tag="+1"
            />
          </div>
          <div className="score-container">
            <span className="score">{commandPoints}</span>
          </div>
          <div className="single-btn-right-container">
            <CounterBtn
              className="btn btn--square btn--red"
              onClick={() => dispatch(decrement(config.cpsCountingByOnes))}
              tag="-1"
            />
          </div>
        </div>
      </section>

      <DangerZone />
    </main>
  );
}

export default App;
