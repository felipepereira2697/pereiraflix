import { useState } from 'react';

// Custom hooks devem ter o prefixo use
function useForm(valoresIniciais) {
    //abrindo oq esta vindo do array useState
    const [values, setValues] = useState(valoresIniciais); 

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave] : valor, //nome : 'oNomeVemAqui'
        })
    }

    function handleChange(infosDoEvento) {
        //quem é o alvo da mudança que estamos fazendo
        //usando destructuring
        const { name, value } = infosDoEvento.target;
        setValue(name, value);
    }
    function clearForm() {
        setValues(valoresIniciais); 
    }
    return {
        values,
        handleChange,
        clearForm,
    }
}

export default useForm;