import { useState } from 'react';
// importing styled components package
import { styled } from 'styled-components'

// Creating a styled div with styled components with``. This is a tagged template in JS
// This returns a component div that already has these styles attached to it. 
const ControlContainer =
  styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`
const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
// Passing conditional style as a function to set styling dynamically below
color: ${({ invalid }) => invalid ? '#f87171' : '#6b7280'};
`
const Input = styled.input`
width: 100%;
padding: 0.75rem 1rem;
line-height: 1.5;
background-color: ${({ $invalid }) => $invalid ? '#fed2d2' : '#d1d5db'} ;
color: #374151;
border: 1px solid  ${({ $invalid }) => $invalid ? '#f73f3f' : 'transparent'};
border-radius: 0.25rem;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
color: ${({ invalid }) => invalid ? '#ef4444' : '#6b7280'};
`
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
      {/* Using ControlContainer style component */}
      <ControlContainer>
        <p>
          {/* Setting className on label dynamically so taht different CSS rules can apply as needed */}
          {/* Setting it to a template literal with `` used to create Strings*/}
          {/* The className will always have label and in addition to it- invalid or nothing, depending on the candition */}
          <Label $invalid={emailNotValid}>
            Email
          </Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          {/* Dynamic styling applied with invalid on Password label */}
          <Label $invalid={passwordNotValid}>
            Password
          </Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            // style={{
            //   background: passwordNotValid ? '#ef4444' : '#d1d5db',
            // }}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
