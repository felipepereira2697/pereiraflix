import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input `

`;
function FormField({ value, onChange, name, type, label}) {
    const fieldId = `id_${name}`;
    const isTextArea = type === 'textarea';
    const tag = isTextArea ? 'textarea' : 'input';
    return (
        
        <div>
            <label>{label}:
                <Input
                as = {tag}
                id={fieldId}
                type={type}  
                value={value}
                name = {name}
                onChange={onChange}
                /> 
            </label>
        </div>
    );
        
    
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {}, 
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string, 
    onChange: PropTypes.func, 
    name:PropTypes.string.isRequired, 
    type: PropTypes.string, 
    
}


export default FormField; 