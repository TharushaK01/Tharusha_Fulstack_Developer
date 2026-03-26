import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h2>Get in touch</h2>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h3>Let's Talk</h3>
                <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you’re looking for a developer to build scalable web solutions or a designer to craft engaging user experiences, let’s connect and create something impactful together.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <p>✉ &nbsp;&nbsp;tharushakavinda01@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <p>☏ &nbsp;&nbsp;(+94)71 883 2011</p>
                    </div>
                    <div className="contact-detail">
                        <p>⟟ &nbsp; &nbsp;Kurunegala, Sri Lanka.</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <form action="" className='contatct-form'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name="email"/>
                <label htmlFor="">Wrte Your Message Here</label>
                <textarea name="message" rows="7" placeholder='Enter your message'></textarea>
                <button className='contact-submit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact