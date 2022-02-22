export default function validateinfo(values,is_signUp){
    let  error={
        
    }


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(!String(values.fname).trim() && is_signUp){
        error.fname='First name required'
    }

    if(!String(values.lname).trim()&& is_signUp){
        error.lname = 'Last name is required'
    }
    if(!values.email){
        error.email = 'Email required'
    }else if(!validateEmail(values.email)){
        error.email='Email address is invalid!'
    }


    if(!values.password){
        error.password='Password is required'
    }else if(values.password.length <6){
        error.password='Password needs to be 6 characters or more'
    }


    if (!values.password2 && is_signUp){
        error.password2='Password is required'
    }else if(values.password !== values.password2 && is_signUp){
        error.password2='Password do not match'
    }
    return error;
}