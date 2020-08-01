import React from 'react';


function FormField({ value, onChange, name, type, label}) {
    return (
        <div>
            <label>{label}:
                <input 
                type={type} 
                value={value}
                name = {name}
                onChange={onChange}
                /> 
            </label>
        </div>
        )
}

export default FormField; 