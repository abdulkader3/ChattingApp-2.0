import React, { useState } from 'react'
import Navbar from '../pages/Navbar'
import { IoIosArrowBack } from 'react-icons/io'

const ChatingPage = () => {


  // for chating page
  const [one , tow] = useState(true)
  const [onenav , townave] = useState(false)


  const trinayCahtPage = ()=>{
    tow(!one)
    townave(!onenav)
  }

  

   

  return (
    <>
      {onenav? "": <Navbar/>}
     <div className="flex">
     <div className={`w-[320px] ${one?"chatPageC":"chatPage"} chats h-[100vh] md:ml-[70px] overflow-y-scroll`}>

      {/* map this */}
      <button onClick={trinayCahtPage} className=" w-full h-[50px] mt-12 border rounded ">
        <div className="flex gap-10 items-center pl-1">
          <div className=" w-10 h-10 overflow-hidden rounded-full bg-green-600 ">
          <img className=' w-10 h-10  ' src="" alt="user" />
          </div>
          <h2>NAME USER</h2>

        </div>
      </button>
      
     </div>
     <div className={`w-[320px] md:w-[950px]  ${one?"chatPage":"chatPageC"} h-[100vh] blurchat`}>


      <div onClick={trinayCahtPage} className=" pl-2 pt-5 md:hidden "> <IoIosArrowBack className='text-white text-[30px] '/></div>

      <div className="chatBox w-full h-[100vh]  flex flex-col gap-4 overflow-y-scroll">

        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>
        <div className="resiveData w-[150px] md:w-[500px]  text-[10px] ml-[2%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

        
        <div className="sentData bg-[#18d1ff2c] w-[150px] md:w-fit text-[10px] ml-[50%] py-1 px-2 rounded-xl text-white border ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni, molestias quos facere provident exercitationem sapiente accusamus earum totam tenetur, velit corporis, ipsum quibusdam assumenda illo temporibus illum beatae reiciendis? </p>
        </div>

       

        

      </div>
     </div>
     </div>
      
    </>
  )
}

export default ChatingPage
