import { useState } from 'react';


export const useForm = (initValue, onSubmitHandler) => {
    const [values, setValue] = useState(initValue);

    const changeHandler = (e) => {
        setValue(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    }

    return {
        values,
        changeHandler,
        onSubmit,
    }
}