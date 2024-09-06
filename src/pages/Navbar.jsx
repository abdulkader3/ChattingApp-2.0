import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const currentUserData = useSelector((state)=>state.prity.peraDitase)
  return (
    <>
      <nav className=" absolute top-0 left-0 w-[160px] shadow-2xl flex flex-col items-center justify-between  h-[100vh] Navbar ">
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
              Friends List
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
        </ul>
        <div className="w-full flex items-end h-full Profile ">
          <div className="flex items-center gap-4 mb-5 ml-1 w-full">
            <Link to="/" className=" w-[50px] h-[50px] overflow-hidden bg-[#f37024] rounded-full ">
              <img src={currentUserData?.photoURL} alt="profile" />
            </Link>
            <Link to="/"> {currentUserData?.displayName} </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
