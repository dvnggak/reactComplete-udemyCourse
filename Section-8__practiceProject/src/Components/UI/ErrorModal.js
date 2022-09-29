import React from 'react'
import Card from './Card'
import Button from './Button'

import styles from './ErrorModal.module.css'


const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.errTitle}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.errMessage}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>
                        Confirm
                    </Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;