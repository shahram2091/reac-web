import React from 'react'
import './experience.css'
import {BsPatchExclamation} from "react-icons/bs";


 const Experience = () => {
  return (
    <section id='experince'>
        <h5>What skills I have</h5>
        <h2>My Experiance</h2>
        <div className="container experience_container">
            <div className="experience_fronted">
                <h3>Fronted Development</h3>
                <div className="experience_content">
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>HTML</h4>
                            <small className='text-light'>Experianced</small>
                    </article>
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                    </article>
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experianced</small>
                    </article>
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>Bootstrape</h4>
                            <small className='text-light'>Experianced</small>
                    </article>
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>TaiWind</h4>
                            <small className='text-light'>Experianced</small>
                    </article>
                    <article className='experience_details'>
                        <BsPatchExclamation/>
                            <h4>Reacr</h4>
                            <small className='text-light'>Experianced</small>
                    </article>
                </div>
            </div>
            <div className='experiane-backend'>
                <h3>Fronted Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>Node.js</h4>
                                <small className='text-light'>Experianced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>PHP</h4>
                                <small className='text-light'>Experianced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>MYSQL</h4>
                                <small className='text-light'>Experianced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>BASIC</h4>
                                <small className='text-light'>Experianced</small>
                        </article>
                        <article className='experience_details'>
                            <BsPatchExclamation/>
                                <h4>PAYTHON</h4>
                                <small className='text-light'>Experianced</small>
                        </article>
                    </div>
            </div>
        </div>
    </section>
  )
}
export default Experience;
