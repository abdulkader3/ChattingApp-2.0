import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getDatabase, ref, onValue } from "firebase/database";

const FriendList = () => {

  // our costome hoks
  const [frindData , upfrindData] = useState([])

  // data frome firebase realtime database
  const db = getDatabase();

  // data frome realtime database
  useEffect(() => {
    const starCountRef = ref(db, "FrindList/");
    onValue(starCountRef, (snapshot) => {
      let bag = []
      snapshot.forEach((sokolerData)=>{
        bag.push({...sokolerData.val() , key:sokolerData.key})
      })
      upfrindData(bag)
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-[900px] bg-gradient-to-r from-[#71ffe3] via-[#fff] to-[#008cff] flex flex-col items-center py-10">
        <h2 className="text-3xl font-bold text-black w-full text-center pt-5 pb-5 mb-8 shadow-lg">
          All User
        </h2>
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-6">

          {
            frindData.map((SobData)=>(
              <div key={SobData.key} className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg">
            <div className="flex items-center">
              <img
                src={SobData?.FriendPhoto}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 shadow-sm"
              />
              <span className="ml-5 text-gray-800 font-semibold text-lg">
                {SobData?.FriendName}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#f00] to-[#ff00aa] active:scale-95 text-white px-5 py-2 rounded-full shadow-lg hover:from-[#ff00aa] hover:to-[#f00] transform hover:scale-105 transition duration-300 ease-in-out">
                Unfrinde
              </button>
            </div>
          </div>
            ))
          }

          

        </div>
      </div>
    </>
  );
};

export default FriendList;
