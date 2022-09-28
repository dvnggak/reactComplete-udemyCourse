import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from './AddUser.module.css'

const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button className={styles.input}>
                    <button type="submit">Add User</button>
                </Button>
            </form>
        </Card>
    )
};

export default AddUser;