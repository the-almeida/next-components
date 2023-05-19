import React, { useState } from "react";

import styles from './input.module.css';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    errorMessage?: string,
}


const Input = (props: InputProps) => {
    const [focused, setFocused] = useState(false)
    const { label, onChange, errorMessage, id, ...inputProps } = props

    const handleBlur = () => {
        setFocused(true)
    }
    
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id}
                onChange={onChange}
                onBlur={handleBlur}
                x-focused={focused.toString()}
                {...inputProps}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input