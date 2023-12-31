import React from 'react'
import { useState } from 'react'
import './StyleForm.css'

export default function RegistrationForm(props) {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}

                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );

}
