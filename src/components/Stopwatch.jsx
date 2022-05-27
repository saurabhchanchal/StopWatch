
import React, {useState} from 'react';

function Stopwatch() {

    const [timerId, setTimerId] = useState(null);
    const [watch, setWatch] = useState(0);

    const start = () => {
        if (!timerId) {
          let id = setInterval(() => {
            setWatch((prev) => prev + 1)
        }, 1000);
        setTimerId(id)  
        } 
     };
    const pause = () => {
        clearInterval(timerId);
        setTimerId(null)
     };
    const reset = () => {
        clearInterval(timerId);
        setWatch(0);
     };

  return (
    <div>
          <h2>Stopwatch</h2>
          <h2>{watch}</h2>
          <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
          </div>
    </div>
  );
}

export default Stopwatch;
