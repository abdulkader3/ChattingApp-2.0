import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { TbLogout2 } from "react-icons/tb";
import { FaBell } from "react-icons/fa";


const Navbar = () => {
  const currentUserData = useSelector((state)=>state.prity.peraDitase)

  // trinary 
  const [one , tow] = useState(false)


  const fornotifition = ()=>{
    tow(!one)
  }
  



  return (
    <>
      <div className="mainnav  ">

        <div className="">
        <nav className=" absolute overflow-hidden top-0 left-0 w-[160px] shadow-2xl flex flex-col items-center justify-between  h-[100vh] Navbar ">
        <ul className="flex flex-col gap-10 mt-10">
          <li>
            <NavLink
              to="/addfriends"
              className={({ isActive }) =>
                isActive
                  ? " bg-blue-500 rounded-[2px] text-[#fff] hover:border-[1px] p-[8px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
                  : " p-[9px] rounded-[4px] hover:border-[1px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
              }
            >
              Add Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friendslist"
              className={({ isActive }) =>
                isActive
                  ? " bg-blue-500 rounded-[2px] text-[#fff] hover:border-[1px] p-[8px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
                  : " p-[9px] rounded-[4px] hover:border-[1px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
              }
            >
              Friend List
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/friendrequast"
              className={({ isActive }) =>
                isActive
                  ? " bg-blue-500 rounded-[2px] text-[#fff] hover:border-[1px] p-[8px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
                  : " p-[9px] rounded-[4px] hover:border-[1px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
              }
            >
              Friend Requast
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/requastSend"
              className={({ isActive }) =>
                isActive
                  ? " bg-blue-500 rounded-[2px] text-[#fff] hover:border-[1px] p-[8px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
                  : " p-[9px] rounded-[4px] hover:border-[1px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
              }
            >
              Requast Send
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/blocklist"
              className={({ isActive }) =>
                isActive
                  ? " bg-blue-500 rounded-[2px] text-[#fff] hover:border-[1px] p-[8px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
                  : " p-[9px] rounded-[4px] hover:border-[1px] hover:bg-transparent transition-all active:scale-95 hover:scale-110"
              }
            >
              Block List
            </NavLink>
          </li>

        </ul>
        <div className="w-full overflow-hidden flex flex-col justify-end items-center h-full Profile ">
          <div className="flex overflow-hidden items-center mb-52 gap-4 ml-10 w-full">
            <Link to="/" className=" w-[50px] h-[50px] overflow-hidden bg-[#f37024] rounded-full ">
              <img src={currentUserData?.photoURL} alt="profile" />
            </Link>
            <Link to="/"> {currentUserData?.displayName} </Link>

          </div>
          <button className=" text-[17px] text-center overflow-hidden hover:text-white mb-2 hover:bg-transparent hover:border-[1px] hover:scale-110 active:scale-95 transition-all p-3 bg-white rounded-md  flex items-center gap-2 "> <TbLogout2/> LogOut </button>
        </div>
      </nav>
          </div>




          <div className=" notifition absolute top-10 right-10">
            <h4 onClick={fornotifition} className="text-3xl notifitionIcon flex justify-end text-white"> <FaBell className=""/> </h4>
            {one && <div className=" w-[250px] pt-5 h-[600px] notifitionPage ">


              {/* data from realtime database */}

              <div className="one w-full py-1 flex items-center mt-2 border-[1px]  rounded-md ">
                <div className="">
                  <Link className="flex flex-wrap pl-2 items-end text-white " to='/friendrequast'> <h4> name </h4> <p className="text-[13px] pl-1 flex text-wrap"> sent you friend requast</p> </Link>
                </div>
              </div>
              
              
              </div>}
          </div>


      </div>
    </>
  );
};

export default Navbar;
