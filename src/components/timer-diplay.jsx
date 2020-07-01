import React from "react";

const TimerDisplay = ({timeLeft}) => {
    const format = (ms) => new Date(ms).toISOString().slice(14, 19);

    const formatted = format(timeLeft * 1000);
    return (
        <div className={"timerDisplay"}>
            <p className={"timerDisplayText"}>{formatted}</p>
        </div>
    );
};

export default TimerDisplay;
