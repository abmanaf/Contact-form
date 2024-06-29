import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='form-container'>
        <div>
        <h2 style={{marginBottom: '1em'}}>Contact Us</h2>
        <div className='full-name'>
          <div> 
            <label htmlFor="">First Name *</label> <br />
            <input type="text" name="first-name" id="first_name" />
            <span>This field is required</span>
          </div>
          <div>
            <label htmlFor="">Last Name *</label> <br />
            <input type="text" name="last-name" id="last_name" />
            <span>This field is required</span>

          </div>
        </div>
        <div className='email'>
          <label htmlFor="">Email Address *</label> <br />
          <input type="text" name="email" id="email" />
          <span>Please enter a valid email address</span>

        </div>
      
        <div class="query-type">
        <label for="query-type"> Query Type <span class="required-input">*</span></label>
        <div class="radio-container" style={{marginTop: '8px'}}>
          <div class="radio-option">
            <input type="radio" id="general-enquiry" name="query-type" value="general-enquiry"/>
            <label for="general-enquiry"> General Enquiry</label>

          </div>
          <div class="radio-option">
            <input type="radio" id="support" name="query-type" value="support"/>
            <label for="support"> Support</label>

          </div>

        </div>
        <span>Please select a query type</span>

        <p class="form-alert" style={{display: 'none'}}>Please select a query type</p>
      </div>
      <div className='text-area'>
        <label htmlFor="">Message *</label>
        <textarea name="" id="" cols="5" rows="5"></textarea>
        <span>This field is required</span>

      </div>
      <div className='check-box'>
        <input type="checkbox" name="checkbox" id="check-box" /> <span style={{marginLeft: '1em'}}>I consent to be bein contacted by the team</span> <br />
        <span>To submit this form please consent to being contacted</span>
      </div>
      <button>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
