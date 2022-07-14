import React from 'react'
import Course from "../components/Course"
import Head from 'next/head'


const courses = () => {
  return (
    <div className="flex min-h-screen flex-col  px-12 py-2 bg-gray-300">
    <Head>
      <title> App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className=" ">
      <h2 className="text-center font-bold text-green-600 text-3xl py-10">Courses</h2>
    <div className="flex my-6 items-center pl-10">
        <div className="">
    <Course/>
    </div>
    <div className="">
    <Course/>
    </div>
    <div className="">
    <Course/>
    </div>
    <div className="">
    <Course/>
    </div>
    </div>
    
    </main>

    
  </div>
  )
}

export default courses