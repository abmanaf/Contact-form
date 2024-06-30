import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("")
  const[error, setError] = useState(false);

  const handleSubmit = () => {

  }

  return (
    <>
      <div className='form-container'>
        <div>
        <h2 style={{marginBottom: '1em'}}>Contact Us</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className='full-name'>
          <div> 
            <label htmlFor="">First Name *</label> <br />
            <input type="text" name="first-name" id="first_name" className={`${error ? 'error' : ''}`} value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
            <span className={`${error ? 'visible' : ''}`}>This field is required</span>
          </div>
          <div>
            <label htmlFor="">Last Name *</label> <br />
            <input type="text" name="last-name" id="last_name" value={lastName} className={`${error ? 'error' : ''}`}  onChange={(e)=> setLastName(e.target.value)} />
            <span className={`${error ? 'visible' : ''}`}>This field is required</span>

          </div>
        </div>
        <div className='email'>
          <label htmlFor="">Email Address *</label> <br />
          <input type="text" name="email" id="email" value={email} className={`${error ? 'error' : ''}`} onChange={(e)=> setEmail(e.target.value)} />
          <span className={`${error ? 'visible' : ''}`}>Please enter a valid email address</span>

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
        <span className={`${error ? 'visible' : ''}`}>Please select a query type</span>

        <p class="form-alert" style={{display: 'none'}}>Please select a query type</p>
      </div>
      <div className='text-area'>
        <label htmlFor="">Message *</label>
        <textarea name="" id="" cols="5" rows="5" value={message} className={`${error ? 'error' : ''}`} onChange={(e)=>setMessage(e.target.value)}/>
        <span className={`${error ? 'visible' : ''}`}>This field is required</span>

      </div>
      <div className='check-box'>
        <div style={{display: 'flex'}}>
        <input type="checkbox" name="checkbox" id="check-box" onChange={(e)=>handleChecked(e.target.checked)}/> <span style={{marginLeft: '1em',display: 'flex'}}>I consent to be bein contacted by the team *</span>
        </div>
         <br />
        <span className="error">To submit this form please consent to being contacted</span>
      </div>
      <button>Submit</button>
      </form>
        </div>
      </div>
    </>
  )
}

export default App
