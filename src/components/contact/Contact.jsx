import React from 'react';
import './contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiExchangeFundsFill} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_3fjfb17','template_kylucaz',form.current,'user_641J0AWGxx4qcKi835yDq')

       e.target.reset()
    };
  return (
  <section id='contact'>
       <h5>Get IN Touch</h5>
       <h2>Contact Me</h2>
        <div className='container contact_container'>
            <div className='contact_options'>
                <article className='contact_option'>
                    <MdOutlineEmail/>
                    <h4>Email</h4>
                    <h5>ssmailiazar@gmail.com</h5>
                    <a href="www.ssmailiazar@gmail.com" target='_blank'>Send a Massage</a>
                </article>
                <article className='contact_option'>
                    <RiExchangeFundsFill/>
                    <h4>Massenger</h4>
                    <h5>egatortutorials</h5>
                    <a href="https://m.me/ernest.achiever" target='_blank'>Send a Massage</a>
                </article>
                <article className='contact_option'>
                    <BsWhatsapp/>
                    <h4>WathsApp</h4>
                    <h5>989390747711</h5>
                    <a href="https://api.wathsapp.com/send?phone+989390747711" target='_blank'>Send a Massage</a>
                </article>
            </div>
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='your full names' required/>
                <input type="text" name="email" placeholder='your Email' required/>
                <textarea name='message' rows="7" placeholder='your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Massage</button>
            </form>
        </div>
  </section>
  )
}

export default Contact
