import { useState, useEffect } from "react";
import validateinfo from "./validate.";


const useForm=(submitForm,is_signUp) =>{
    const [values,setvalue]= useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        password2:'',
        stid:''
    })
    const [error,setError] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)
    

    const handleChange = e=>{
        const{name, value} = e.target;
        setvalue({
            ...values,
            [name]: value
        })
        console.log(value)
    }
    const handleSubmit = e=>{
        e.preventDefault();
        setError(validateinfo(values,is_signUp));
        setIsSubmitting(true);
        console.log(Object.keys(error).length)
        console.log(isSubmitting)
        console.log(error)
        
    }
    useEffect(()=>{
        if(Object.keys(error).length === 0 && isSubmitting){
            submitForm(values);
            console.log('pass')
        }
    },[error])
    return {handleChange,values,handleSubmit,error};
}
export default useForm;