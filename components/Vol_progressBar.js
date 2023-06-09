import React from "react";

const Vol_progressBar = ({ percentage }) => {
    let backgroundColor = "";

    if (percentage > 75) {
        backgroundColor = "bg-green-500";
    } else if (percentage > 50) {
        backgroundColor = "bg-yellow-500";
    } else {
        backgroundColor = "bg-red-500";
    }

    return (
        <div className="grid grid-flow-row justify-items-center">
            <div className="w-[2rem] h-[1rem] bg-indigo-600 rounded-sm mb-1 "></div>
            <div className="w-[6rem] h-[11rem] bg-[#EFEFEF] rounded-lg rotate-180 border-4 border-indigo-600">
                <div
                    className={`h-full rounded-lg ${backgroundColor}`}
                    style={{ height: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Vol_progressBar;

