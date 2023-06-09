
import React from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";

const SpeedMeter = ({ data_enter }) => {
    return (
        <div className="relative w-[15rem] h-[15rem] rounded-full border-indigo-600 grid">
            <div className="w-[14rem] h-[14rem]">
                <ChangingProgressProvider values={[data_enter?.Speed]}>
                    {value => (
                        <CircularProgressbar
                            value={value}
                            strokeWidth={3}
                            circleRatio={0.75}
                            styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                textColor: "rgb(245 243 255)",
                                pathColor: "rgb(79 70 229)",
                                trailColor: "rgb(49 46 129)",
                                textSize: "15px",
                            })}
                        />
                    )}
                </ChangingProgressProvider>
            </div>





            {/* 

            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[-90deg] z-[9]"></div>

            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[0deg] z-[9] "></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[46deg] z-[9]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[134deg] z-[9]"></div>

            <div className="absolute w-52 h-52 bg-gray-900 place-self-center rounded-full z-[10]" ></div>


            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[57deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[69deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[81deg] z-[7]"></div>

            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[100deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[112deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[124deg] z-[7]"></div>

            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[146deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[158deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[170deg] z-[7]"></div>

            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[192deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[204deg] z-[7]"></div>
            <div className="absolute w-1 h-64 lg:h-72 bg-indigo-600 place-self-center rotate-[216deg] z-[7]"></div>

            <div className="absolute place-self-center bottom-[12px] left-[10px] z-[8]" >
                <div className="absolute w-72 h-16 bg-gray-900 -bottom-2" ></div>
            </div>

            <div className="absolute w-60 h-60 bg-gray-900 place-self-center rounded-full z-[8]" ></div>

            <div className="absolute place-self-center bottom-[12px] left-[100px] z-[11]" >
                <div className="absolute w-24 h-16 bg-gray-900 -bottom-2 z-[11]" ></div>
            </div>

            <div className="absolute place-self-center right-[65px]  z-[11]" >
                <h5 className="text-lg text-white">150</h5>
            </div>

            <div className="absolute place-self-center left-[65px]  z-[11]" >
                <h5 className="text-lg text-white">30</h5>
            </div>

            <div className="absolute place-self-center top-[65px]  z-[11]" >
                <h5 className="text-lg text-white">90</h5>
            </div>

            <div className="absolute place-self-center top-[90px] left-[90px] z-[11]" >
                <h5 className="text-lg text-white">60</h5>
            </div> */}


            {/* <div className="absolute place-self-center top-[90px] right-[90px] z-[11]" >
                <h5 className="text-lg text-white">120</h5>
            </div>

            <div className="absolute place-self-center bottom-[90px] left-[90px] z-[11]" >
                <h5 className="text-lg text-white">0</h5>
            </div>

            <div className="absolute place-self-center bottom-[90px] right-[90px] z-[11]" >
                <h5 className="text-lg text-white">180</h5>
            </div> */}


        </div>
    )
};

export default SpeedMeter