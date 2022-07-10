import React from 'react-icons/bs'
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Headersocials = () => {
  return (
    <div className='header.socials'>
        <a href="https://linkedin.com" target="blank"><FaLinkedinIn/></a>
        <a href="https://github.com" target="blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="-blanked"><FiDribbble/></a>
    </div>
  )
}

export default Headersocials;
