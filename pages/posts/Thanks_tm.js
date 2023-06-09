import Image from 'next/image'
import Link from 'next/link';

import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import {GiSpeedometer} from "react-icons/gi";

export default function FirstPost() {
    return(
      <main className="min-h-screen bg-gradient-to-l to-indigo-600 from-[#194776] p-4 sm:p-10 text-[#134255]">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 z-[2]">
          <div className= "rounded-lg border-2  px-3 sm:px-5 py-4 transition-colors  border-neutral-700 bg-[#ffffff] flex flex-col items-center justify-between h-auto sm:h-[19rem] w-[91rem] col-span-1 lg:col-span-2" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              We would like to thank{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-pulse">
              <GiSpeedometer />
            </span> 
            </h2>
            <div className="grid grid-flow-col justify-items-center content-center w-full h-full text-sm opacity-75 grid-cols-1 sm:grid-cols-3">
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text  bg-gradient-to-r to-indigo-600 from-sky-400">PhD. Izquierdo</span></h1>
                <p className="text-lg text-[#175873]">For being there every time we needed him</p>
              </div>
            </div>
            <div className='text-center flex justify-center items-center'>
              <div>
                <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">MsC. Luis Arce</span></h1>
                <p className="text-lg text-[#175873]">For teaching us Database and data procesing faster than any Youtube tutorial</p>
              </div>
            </div>
              <div className='text-center flex justify-center items-center'>
                <div>
                  <h1 className="font-extrabold text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">Armando Genis</span></h1>
                  <p className="text-lg text-[#175873]">For introducing us to the world of Node.Js and having more patience than Buda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mb-3 text-2xl font-semibold"> Back to <Link className= "text-white" href="/">dashboard!</Link></h1>

      </main>
    ) 
  }
  