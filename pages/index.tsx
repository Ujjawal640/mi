import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-500">
      <Head>
        <title> App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className=" bg-white rounded-2xl shadow-2xl flex w-2/5 max-w-4xl items-center">
          <div className=" ">
           <div className="py-4 pl-16    ">
                 <div className="py-4 font-bold text-3xl mb-2 text-green-600   "> Sign in to Account</div>
                 <div className="border-2 w-10 mb-2 border-green-500 inline-block"> </div>
                 <div className="flex flex-col items-center mb-3">
                  <div className="bg-gray-100 w-65  p-2 flex items-center">
                    <input type="email" name="Email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"></input>
                  </div>
                 </div>
                 <div className="flex flex-col items-center mb-3">
                  <div className="bg-gray-100 w-65  p-2 flex items-center">
                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"></input>
                  </div>
                 </div>
                 <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>
                  Remember Me</label>
                  <a href="#" className="text-xs"> Forget Password</a>
                 </div>
                 <a href="#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white  hover:text-green-500"> Sign In</a>
           </div>
           </div>
        </div>
      </main>

      
    </div>
  )
}

export default Home
