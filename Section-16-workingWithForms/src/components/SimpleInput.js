import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('')
  const [nameIsTouched, setNameIsTouched] = useState(false)

  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const nameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !nameIsValid && nameIsTouched

  const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.com') && enteredEmail.trim() !== ""
  const emailValidFormat = enteredEmail.includes('@') && enteredEmail.includes('.com')
  const emailNotEmpty = enteredEmail.trim() !== ""
  const emailInputIsInvalid = !emailNotEmpty && emailIsTouched
  const emailInputIsInvalidFormat = !emailValidFormat && emailNotEmpty

  let formIsValid = false

  if (nameIsValid && emailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setNameIsTouched(true)
  }

  const emailInputBlurHandler = (event) => {
    setEmailIsTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameIsTouched(true)
    setEmailIsTouched(true)

    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(enteredName)

    setEnteredName('')
    setEnteredEmail('')
    setNameIsTouched(false)
    setEmailIsTouched(false)
  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
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
