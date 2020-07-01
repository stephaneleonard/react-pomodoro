import React, {useState, useEffect} from "react";
import ReactDom from "react-dom";
import "./app.css";
import "./app.scss";
import TimerForm from "./components/timer-form";
import TimerDisplay from "./components/timer-diplay";
import TimerModal from "./components/timer-modal";

const App = () => {
    const [time, setTime] = useState(60 * 25);
    const [timeLeft, setTimeLeft] = useState(time);
    const [intervalId, setIntervalId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const incrementTime = () => {
        const newTime = time + 30;
        setTime(newTime);
    };

    const decrementTime = () => {
        const newTime = time - 30;
        if (newTime < 0) {
            setTime(0);
        } else {
            setTime(newTime);
        }
    };

    const resetTimeLeft = () => {
        setTimeLeft(time);
        clearInterval(intervalId);
        setIntervalId(null);
    };

    const isStarted = intervalId != null;
    const handleStartStopClick = () => {
        if (isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTime => {
                    const newTime = prevTime - 1;
                    if (newTime >= 0) {
                        return prevTime - 1;
                    }
                    return prevTime;
                });
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    useEffect(() => {
        setTimeLeft(time);
    }, [time]);

    useEffect(() => {
        if (timeLeft <= 0) {
            resetTimeLeft();
            setIsModalOpen(true);
        }
    }, [timeLeft]);

    return (
        <div className={"app"}>
            <TimerDisplay
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                intervalId={intervalId}
                setIntervalId={intervalId}
            />
            <TimerForm
                decrementTime={decrementTime}
                incrementTime={incrementTime}
                handleStartStopClick={handleStartStopClick}
                intervalId={intervalId}
                resetTimeLeft={resetTimeLeft}
            />
            <TimerModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleStartStopClick={handleStartStopClick}
            />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector("#root"));
