import React from 'react';
import PropTypes from 'prop-types';

function FormField({ value, onChange, name, type, label}) {
    const fieldId = `id_${name}`;
    if( name === 'descricao') {
        return (
            
            <div>
                <label>{label}:
                    <textarea 
                    id={fieldId}
                    type={type} 
                    value={value}
                    name = {name}
                    onChange={onChange}
                    /> 
                </label>
            </div>
        );
    }else{
            return (
                
                <div>
                    <label>{label}:
                        <input 
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