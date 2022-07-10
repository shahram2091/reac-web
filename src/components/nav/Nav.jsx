
import React from 'react'
import './nav.css'
import { BiHome} from "react-icons/bi";
import {AiOutlineUserAdd } from "react-icons/ai";
import {BiBookBookmark} from "react-icons/bi";
import {BsSuitHeart} from "react-icons/bs";
import {BiCommentDots} from "react-icons/bi";
import {useState} from 'react'
const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={ activeNav === '#' ? 'active' :''} ><BiHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={ activeNav === '#about' ? 'active' :''} ><AiOutlineUserAdd/></a>
      <a href="#experince" onClick={()=>setActiveNav('#experince')} className={ activeNav === '#experince' ? 'active' :''} ><BiBookBookmark/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={ activeNav === '#service' ? 'active' :''} ><BsSuitHeart/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' :''}><BiCommentDots/></a>
    </nav>
  )
}
export default Nav