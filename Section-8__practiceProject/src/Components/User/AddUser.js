import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from '../UI/ErrorModal'

import styles from './AddUser.module.css'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [errInput, setErrInput] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrInput({
                title: 'Invalid Input',
                message: 'Please enter a name or age !'
            })
            return;
        }
        if (+enteredAge < 1) {
            setErrInput({
                title: 'Invalid Input',
                message: 'Please enter a valid age !'
            })
            return; 
        }
        props.onAddUsers(enteredUsername, enteredAge)
        setEnteredAge('')
        setEnteredUsername('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errHandler = () => {
        setErrInput(null)
    }

    return (
        <div>
            {
                errInput && <ErrorModal errTitle={errInput.title} errMessage={errInput.message} onConfirm={errHandler}/>
            }
            <Card className={styles.input} >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;