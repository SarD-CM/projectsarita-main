import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import SpeedMeter from '../components/SpeedMeter';
import Vol_progressBar from '../components/Vol_progressBar';
import Stopwatch from '../components/Stopwatch';
import Rpm_Chart from '../components/Rpm_Chart';
import Throttle_Chart from '../components/Throttle_Chart';
import Logo from '../components/Images';

import { BiAlbum, BiTrendingUp, BiAlarmSnooze, BiTimeFive } from "react-icons/bi";
import { IoInvertModeSharp, IoAnalyticsOutline } from "react-icons/io5";
import {GiSpeedometer} from "react-icons/gi";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getMeasurements');
        const data = await response.json();
        // console.log(data[0].rpm)
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await fetch('/api/register');
        const data2 = await response.json();
        console.log(data2.previous)
        setData2(data2);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    fetchData2();


    const intervalId  = setInterval(() => {
      fetchData();
      fetchData2();
    }, 500);


    return () => {
      clearInterval(intervalId);
    };
  }, []);
  console.log(data)
  console.log(data2)

  // SOC
  const progress = data?.SOC

  return (
    <main className="min-h-screen bg-gradient-to-l to-indigo-600 from-[#194776] p-4 sm:p-10 text-[#134255]">
      <div><center><Logo/></center><br></br></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 z-[2]">

        <div className="rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full"  >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Speed{' '} Speed
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-spin">
              <BiAlbum />
            </span>
          </h2>
          <div className={`grid grid-flow-col text-sm opacity-75 gap-4`}>
            <SpeedMeter data_enter={data} />
            <div className='text-center '>

              <h1 className=" mt-6  place-self-center font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">{data?.Speed}</span></h1>
              <p className=" text-center  text-lg text-[#175873]">Km/h</p>
            </div>
          </div>
        </div>


        <div className="rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full"  >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Throttle{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-safe:animate-bounce">
              <BiTrendingUp />
            </span>
          </h2>
          <div className={`w-full h-full text-sm opacity-75 grid-cols-3 flex justify-center items-center space-x-2`}>
            <div className=" w-[18rem] h-[11rem] rounded-xl mt-3 relative ">
              <Throttle_Chart data_fetching={data} />
            </div>
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text  bg-gradient-to-r to-indigo-600 from-sky-400">{data?.Throttle}</span></h1>
                <p className=" text-lg text-[#175873]">%</p>
              </div>
            </div>
          </div>
        </div>


        <div className="rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full"  >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            RPM{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-pulse">
              <IoAnalyticsOutline/>
            </span>
          </h2>
          <div className={`w-full h-full text-sm opacity-75 grid-cols-3 flex justify-center items-center space-x-2`}>
            <div className=" w-[18rem] h-[11rem] rounded-xl mt-3 relative ">
              <Rpm_Chart data_fetching={data} />
            </div>

            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text  bg-gradient-to-r to-indigo-600 from-sky-400">{data?.rpm}</span></h1>
                <p className=" text-lg text-[#175873]">Rpms</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full col-span-1 lg:col-span-2" >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Battery level{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-pulse">
              <IoInvertModeSharp />
            </span>
          </h2>
          <div className="grid grid-flow-col justify-items-center content-center w-full h-full text-sm opacity-75 grid-cols-1 sm:grid-cols-3">
            <Vol_progressBar percentage={progress} />
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text  bg-gradient-to-r to-indigo-600 from-sky-400">{data?.SOC}</span> <span className='text-lg text-gray-500'> %</span>  </h1>
                <p className=" text-lg text-[#175873]">Percentage.</p>
              </div>
            </div>
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">{data?.V_batt} </span></h1>
                <p className=" text-center  text-lg text-[#175873]">Volts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Discharge Time{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-spin">
              <BiTimeFive />
            </span> 
            </h2>
          <div className={` w-full h-full text-sm opacity-75 grid justify-items-center content-center`}>
            <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">{data?.Discharge_time}</span></h1>
            <p className=" text-center  text-lg text-[#175873]">Hour(s)</p>
          </div>
        </div>

        <div className="rounded-lg border-2 px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full" >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Stopwatch{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-bounce">
              <BiAlarmSnooze />
            </span>
          </h2>
          <div className={` w-full h-full text-sm opacity-75 grid justify-items-center content-center`}>
            <Stopwatch />
          </div>
        </div>

        <div className= "rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-full col-span-1 lg:col-span-2" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Throttle change over time{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-pulse">
              <GiSpeedometer />
            </span> 
            </h2>
            <div className="grid grid-flow-col justify-items-center content-center w-full h-full text-sm opacity-75 grid-cols-1 sm:grid-cols-3">
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text  bg-gradient-to-r to-indigo-600 from-sky-400">{data2?.previous}</span><span className='text-lg text-gray-500'> %</span></h1>
                <p className="text-lg text-[#175873]">Previous</p>
              </div>
            </div>
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">{data2?.current}</span><span className='text-lg text-gray-500'> %</span></h1>
                <p className="text-lg text-[#175873]">Present</p>
              </div>
            </div>
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">{data2?.percentage} </span></h1>
                <p className="text-lg text-[#175873]">Average</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Dataget /> */}
        <h1 className="mb-3 text-2xl font-semibold">Here are the <Link className= "text-white" href="/posts/Thanks_tm">Acknowledgments!</Link></h1>

      </div >
    </main >
  )
}
