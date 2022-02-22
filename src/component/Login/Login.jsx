import {Grid,Paper,Typography,TextField,Button,Link as link} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = ({login})=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const data ={
        email:'',
        password:''
    }
    const paperStyle= {padding:20,height:'60vh', width: 350,margin:"20px auto"}
    function handleSubmit(event){
        event.preventDefault();
        console.log('Email',email,'Password',password)
        data.email = email
        data.password = password
        login(data)
    }
    const Textfield = {
        margin:'10px 20px',
        width: '300px'
    }
    const ButtonStyle={
        margin:'30px auto 10px auto',
        width:'300px'
    }
    const footerStyle={
        margin:'0 25px'
    }
    return(
        <Grid>
            <Paper elevation = {5} style={paperStyle} >
                <Grid align='center'>
                    <Typography variant='h4'><h3>Log In</h3></Typography>
                </Grid>
                <Grid align="center">
                    <form onSubmit={handleSubmit}>
                        <TextField id="Email" label="Email" variant="standard" type='email' required  style={Textfield}
                        onInput ={e=>{setEmail(e.target.value); console.log(email)}}/>
                        <TextField id="Password" label="Password" variant="standard" type='password' required style={Textfield}
                        onInput={e=>setPassword(e.target.value)}/>
                        <Button type='submit' color= 'primary' variant='contained'  style={ButtonStyle}>Sign In</Button>
                    </form>
                    

                </Grid>
                <Grid style={footerStyle}>
                    <Typography color='primary'>
                       <Link to="#" style={{color:'#1976d2'}}>Fogot password?</Link>
                        
                    </Typography>
                    <Typography>
                        Create an Account! 
                        <Link to="/register" style={{color:'#1976d2'}}> Sign Up</Link>
                        
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}
export default Login 