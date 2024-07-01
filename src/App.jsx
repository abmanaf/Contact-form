import { useState } from 'react';
import './App.css';
import Toast from './Toast';
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
    queryType: false,
    consent: false,
  });
  const [queryType, setQueryType] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      firstName: firstName.trim() === "",
      lastName: lastName.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: message.trim() === "",
      queryType: queryType === "",
      consent: !consent,
    };

    setError(newError);

    const isValid = !Object.values(newError).some(value => value);

    if (isValid) {
      toast((t) => <Toast onClick={() => toast.dismiss(t.id)} />);
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setQueryType("");
      setConsent(false);
      setError({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
        queryType: false,
        consent: false,
      });
    }
  };

  return (
    <>
     <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--Grey-darker)",
            color: "#fff",
          },
        }}
      />
      <div className='form-container'>
        <div>
          <h2 style={{ marginBottom: '1em' }}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className='full-name'>
              <div>
                <label htmlFor="first_name">First Name *</label> <br />
                <input
                  type="text"
                  name="first-name"
                  id="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && <span className='error-message'>This field is required</span>}
                <span style={{visibility: 'hidden'}} className='error-message'>This field is required</span>
              </div>
              <div>
                <label htmlFor="last_name">Last Name *</label> <br />
                <input
                  type="text"
                  name="last-name"
                  id="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && <span className='error-message'>This field is required</span>}
                <span style={{visibility: 'hidden'}} className='error-message'>This field is required</span>

              </div>
            </div>
            <div className='email'>
              <label htmlFor="email">Email Address *</label> <br />
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <span className='error-message'>Please enter a valid email address</span>}
            </div>
            <div className="query-type">
              <label htmlFor="query-type"> Query Type <span className="required-input">*</span></label>
              <div className="radio-container" style={{ marginTop: '8px' }}>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="general-enquiry"
                    name="query-type"
                    value="general-enquiry"
                    checked={queryType === "general-enquiry"}
                    onChange={(e) => setQueryType(e.target.value)}
                  />
                  <label htmlFor="general-enquiry"> General Enquiry</label>
                </div>
                <div className="radio-option">
                  <input
                    type="radio"
                    id="support"
                    name="query-type"
                    value="support"
                    checked={queryType === "support"}
                    onChange={(e) => setQueryType(e.target.value)}
                  />
                  <label htmlFor="support"> Support</label>
                </div>
              </div>
              {error.queryType && <span className='error-message'>Please select a query type</span>}
            </div>
            <div className='text-area'>
              <label htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="message"
                cols="5"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {error.message && <span className='error-message'>This field is required</span>}
            </div>
            <div className='check-box'>
              <div style={{ display: 'flex' }}>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="check-box"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <span style={{ marginLeft: '1em', display: 'flex' }}>
                  I consent to being contacted by the team *
                </span>
              </div>
              {error.consent && <span className='error-message'>To submit this form please consent to being contacted</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
