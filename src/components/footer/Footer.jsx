import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
  <footer >
      <a href="#" className='footer_logo'>EGATOR</a>
      <ul className='permalinks'>
        <li ><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="service">Service</a></li>
        <li><a href="testimonial">Testimonial</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
     <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
        <div className="footer_copyright">
            <small>&copy;EGATOR Tutorials.All rights reserved.</small>
        </div>
     </div>
  </footer>
  )
}
export default Footer
