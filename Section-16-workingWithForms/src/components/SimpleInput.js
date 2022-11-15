import { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName, 
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: resetNameInput,
  } = useInput(value => value.trim() !== '')

  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.com') && enteredEmail.trim() !== ""
  const emailValidFormat = enteredEmail.includes('@') && enteredEmail.includes('.com')
  const emailNotEmpty = enteredEmail.trim() !== ""
  const emailInputIsInvalid = !emailNotEmpty && emailIsTouched
  const emailInputIsInvalidFormat = !emailValidFormat && emailNotEmpty

  let formIsValid = false

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEmailIsTouched(true)

    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredName)

    resetNameInput()
    
    setEnteredEmail('')
    setEmailIsTouched(false)
  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input 
          type='text' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">E-mail must not be empty</p>}
        {emailInputIsInvalidFormat && <p className="error-text">E-mail must in valid format</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
