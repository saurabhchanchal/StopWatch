//rafce

import React, {useState, useEffect} from 'react';

const Timer = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            if (timer > 10) {
                //clearInterval(id)
            } else {
                setTimer( timer + 1);
            }

            //stale state
            //setTimer((prev) => prev - 1);
        }, 1000);

        return () => {
            //call a api to inform that user has logged out
            clearInterval(id) // for to prevent consuming the memory
        };
        //components is unmounting
    }, [timer]);

  return (
      <div>
          Count up : {timer}
          {/* Count Down : {timer} */}
          {/* <button onClick={() => setTimer( (timer) => timer-1)} >{`-`} </button>
          <button onClick={() => setTimer((timer) => timer+1)} >{`+`} </button> */}
    </div>
  );
}

export default Timer;
