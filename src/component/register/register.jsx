import {Grid,Paper,Typography,TextField,Button} from '@mui/material'
import { useState } from 'react'
import useForm from './validate/form'
import { Link } from 'react-router-dom'
const Register=({submitForm})=>{
    const {handleChange,values,handleSubmit,error} = useForm(submitForm,true)
    const PaperStyle={
        padding:20,
        height: '70vh',
        width: 460,
        margin:'30px auto'
    }
    const typoStyle ={
        'letter-spacing':'2px'
    }
    const formStyle ={
        padding:'20px'
    }
    const tfStyle={
        'margin-bottom': '20px'

    }
    const nameform={
        margin:'0 10px 20px 0'
    }
    const f_typoStyle={
        'margin-left':'10px'
    }
    
    return(
        <Grid>
            <Paper elevation={5} style={PaperStyle}>
                <Grid align="center">
                    <Typography color='primary' style={typoStyle}><h2>Register</h2></Typography>
                    <Typography>Create a new account and enjoy with us!</Typography>
                </Grid>
                <Grid style={formStyle}>
                    <form onSubmit = {handleSubmit}>
                        
                            <TextField 
                            id='fname' 
                            label="First name" 
                            variant='standard' 
                            type="text"
                            required
                            //value={values.fname}
                            helperText={error.fname}
                            onChange={handleChange}
                            style={nameform}
                            name = 'fname'
                            />
                            
                     
                        
                        <TextField 
                        id='lname' 
                        label="Last name" 
                        variant='standard' 
                        type="text"
                        required
                        //value={values.lname}
                        style={nameform}
                        onChange={handleChange}
                        name='lname'
                        helperText={error.lname}
                        />
                        <TextField 
                        id='Email' 
                        label="Email" 
                        variant='standard' 
                        type="email"
                        fullWidth
                        style={tfStyle}
                        required
                        //value={values.email}
                        helperText={error.email}
                        onChange={handleChange}
                        name='email'
                        />
                        <TextField 
                        id='st_id' 
                        label="Student Id" 
                        variant='standard' 
                        type="number"
                        fullWidth
                        //value={values.stid}
                        style={tfStyle}
                        required
                        name = 'stid'
                        onChange={handleChange}
                        />
                        <TextField 
                        id='password' 
                        label="Password" 
                        variant='standard' 
                        type="password"
                        fullWidth
                        //value={values.password}
                        required
                        style={tfStyle}
                        helperText={error.password}
                        onChange={handleChange}
                        name='password'
                        />
                        <TextField 
                        id='cf-password' 
                        label="Confirm Password" 
                        variant='standard' 
                        type="password"
                        fullWidth
                        required
                        //value={values.password2}
                        helperText={error.password2}
                        style={tfStyle}
                        onChange={handleChange}
                        name='password2'
                        />
                        <Button type = 'submit' color='primary' variant='contained' fullWidth style={{'margin':'10px 0 20px 0'}}>Register</Button>
                    </form>
                </Grid>
                <Grid>
                    <Typography style={f_typoStyle}>Have an account?
                        <Link to="/login"style={{color:'#1976d2'}}> Log in!</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Register