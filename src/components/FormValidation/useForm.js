import React, {useState, useEffect} from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if(Object.keys(errors).length === 0 && isSubmitting) {
                //callback();
                alert("Succesfull form!");
                window.location.href = "http://localhost:3000/";
            }
        },
        [errors]
    );


    return {handleChange, handleSubmit, values, errors};
}

export default useForm;
