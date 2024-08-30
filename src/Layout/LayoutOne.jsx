import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const LayoutOne = () => {
const off = useSelector((state)=>state.prity.peraDitase)

const navigate = useNavigate()

useEffect(()=>{
  if(off == null){
    navigate('/login')
  }
},[])





  return (
    <>

    <Outlet/>
      
    </>
  )
}

export default LayoutOne
