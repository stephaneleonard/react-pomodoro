import React from "react";

const TimerForm = ({
    incrementTime,
    decrementTime,
    handleStartStopClick,
    intervalId,
    resetTimeLeft,
}) => (
    <div className={"form"}>
        <div className={"button"} onClick={decrementTime}>
            {"-"}
        </div>
        <div className={"button"} onClick={handleStartStopClick}>
            {intervalId ? "stop" : "start"}
        </div>
        <div className={"button"} onClick={resetTimeLeft}>
            {"Reset"}
        </div>
        <div className={"button"} onClick={incrementTime}>
            {"+"}
        </div>
    </div>
);

export default TimerForm;
