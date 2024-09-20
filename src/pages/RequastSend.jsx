import React from 'react'
import Navbar from './Navbar'

const RequastSend = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen w-[900px] bg-gradient-to-r from-[#71ffe3] via-[#fff] to-[#008cff] flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold text-black w-full text-center pt-5 pb-5 mb-8 shadow-lg">
          All User
        </h2>
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-6">

          <div  className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg">
            <div className="flex items-center">
              <img
                src=''
                alt="profile"
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-sm"
              />
              <span className="ml-5 text-gray-800 font-semibold text-lg">
                name
              </span>
            </div>
            <div className="flex gap-3">
              <button
              
               className="bg-gradient-to-r from-[#49e751] to-[#0f8] active:scale-95 text-white px-5 py-2 rounded-full shadow-lg hover:from-[#0f8] hover:to-[#49e751] transform hover:scale-105 transition duration-300 ease-in-out">
                Confirm
              </button>
              <button className="bg-gradient-to-r from-[#f00] to-[#ff00aa] active:scale-95 text-white px-5 py-2 rounded-full shadow-lg hover:from-[#ff00aa] hover:to-[#f00] transform hover:scale-105 transition duration-300 ease-in-out">
                Delete
              </button>
            </div>
          </div>
          
                    
        </div>
      </div>
    </div>
  )
}

export default RequastSend
