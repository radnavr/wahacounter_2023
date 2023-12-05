import { useState } from "react";
import { useDispatch } from "react-redux";
import CounterBtn from "./CounterBtn";
import { reset } from "./counterSlice";

const DangerZone = () => {
  const [dangerZone, setDangerZone] = useState(false);
  const dispatch = useDispatch();

  return (
    <section>
      {dangerZone ? (
        <div className="danger-zone-btn-container">
          <CounterBtn
            className="btn btn--rect-s btn--red"
            onClick={() => {
              dispatch(reset());
              setDangerZone(false);
            }}
            tag="ERASE DATA"
          />
          <CounterBtn
            className="btn btn--rect-s btn--blue"
            onClick={() => setDangerZone(false)}
            tag="CANCEL"
          />
        </div>
      ) : (
        <div className="danger-zone-btn-container">
          <CounterBtn
            className="btn btn--rect-l btn--blue"
            onClick={() => setDangerZone(true)}
            tag="SET A NEW GAME"
          />
        </div>
      )}
    </section>
  );
};

export default DangerZone;
