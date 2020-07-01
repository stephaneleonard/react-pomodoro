import React from "react";

const TimerModal = ({isModalOpen, setIsModalOpen, handleStartStopClick}) => {
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const startAgain = () => {
        closeModal();
        handleStartStopClick();
    };
    if (isModalOpen) {
        return (
            <div className={"modal"}>
                <div className={"modalContent"}>
                    <h1>{"Time's up"}</h1>
                    <p>{"You might want to take a break"}</p>
                    <div className={"button"} onClick={startAgain}>
                        {"Start again"}
                    </div>
                    <div className={"button"} onClick={closeModal}>
                        {"close Modal"}
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default TimerModal;
