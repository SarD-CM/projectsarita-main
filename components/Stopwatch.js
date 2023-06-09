
import React, { useState, useEffect } from 'react';


const Stopwatch = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && totalSeconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, totalSeconds]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTotalSeconds(0);
    };

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
        <div className="text-center p-4 space-y-[1rem]">

            <div className=" place-self-center font-extrabold text-6xl"> <span className='text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400'>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            </div>
            <div className="flex justify-center ">
                {!isActive ? (
                    <button
                        className="bg-[#2A7C13] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2"
                        onClick={handleStart}
                    >
                        Start
                    </button>
                ) : (
                    <>
                        <button
                            className="bg-[#6A1111] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
                            onClick={handleStop}
                        >
                            Stop
                        </button>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Stopwatch;
