import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          {/* Setting className on label dynamically so taht different CSS rules can apply as needed */}
          {/* Setting it to a template literal with `` used to create Strings*/}
          {/* The className will always have label and in addition to it- invalid or nothing, depending on the candition */}
          <label className={`label${emailNotValid ? 'invalid' : ''}`}>Email</label>
          <input
            type="email"
            // Dynamically changing color of background for email based on condition
            // style={{
            //   backgroundColor: emailNotValid ? '#ef4444' : '#d1d5db',
            // }}
            // Use a class name to style conditionally and not &&. If you use &&, the className will become emailNotValid
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={`label${passwordNotValid ? 'invalid' : ''}`}>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            // style={{
            //   background: passwordNotValid ? '#ef4444' : '#d1d5db',
            // }}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
