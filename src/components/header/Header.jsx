import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials'

 const Header = () => {
  return (
   <header>
       <div className="container header_container">
            <h5> Hello I'm</h5>
            <h1>Haja Bintu</h1>
            <h5 className="text-light">Full stack Developer</h5>
          
                <CTA/>
              <Headersocials/> 
            <div className="me">
               <img src={ME} alt="me"/>
            </div>
             <a href="#contact" className="scroll-down">scroll.Down</a>
       </div>
   </header>
  )

}
export default Header;
