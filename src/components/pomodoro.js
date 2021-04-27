import React, {useState, useRef, useEffect} from "react";


export default function Timer(){
    const [timer, setTimer] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const countRef = useRef(null);
    const [displayMessage, setDisplayMessage] = useState(false);

    // Functions for handling button clicks
    const handleStart = () => {
        //If timer is already active => PAUSE
        if (isActive === true) {
            clearInterval(countRef.current);
            setIsActive(false);
        }
        //Else, timer is inactive => START
        else if (timer > 1) {
            setIsActive(true);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        }
    };

    useEffect(() => {
        if (timer < 1) {
            clearInterval(countRef.current);
            setIsActive(false);
        } else {
            let timer = displayMessage ? 24 : 4;
            let seconds = 59;

        }
    }, [timer]);

    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setTimer(25 * 60);
    };

    const stopTimer = () => {
        clearInterval(countRef.current);
        setIsActive(false);
    };


    const handleDecrease = () => {
        setTimer(timer - 60);
    };


    const handleIncrement = () => {
        setTimer(timer + 60);
    };

const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);

    return `${getMinutes} : ${getSeconds}`;
};
   
    return  (
    <div className="timer">
        <div className="timer-container">
            <div className="timer-row">
            <button onClick={handleDecrease}>-</button>
          {/* Our timer will be shown here */}
          <p>{formatTime()}</p>
          <button onClick={handleIncrement}>+</button>
            </div>
    <div className="timer-row">
    <div className="buttons">
        <button onClick={handleStart}>{isActive ? "PAUSE" : "START"}</button>
        <button onClick={handleReset}>RESET</button>
        </div>
        </div>
        </div>
    </div>
    );
}