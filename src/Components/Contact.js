import React from 'react'

function Contact() {
  return (
    <div id="contact" className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='Enter Your email'></input>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact