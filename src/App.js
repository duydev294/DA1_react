import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Register from './component/register/register';
import axios from 'axios';
import { useState,useEffect } from 'react';
import AppChart from './component/appChart';
import Login from './component/Login/Login'
import { useNavigate } from 'react-router-dom';

var  jwt
function App() {
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [isLogged,setLogged] = useState(false)
  const [JWT,setJWT] = useState('')
  
    function submitform(values){
      const navigate = useNavigate()
        setIsSubmitted(true)
        register(values)
    }
    function login(data){
      axios.post('http://localhost:5000/api/user/login',{"email":`${data.email}`,"password":`${data.password}`},{})
      .then(res=>{
        setJWT(res.data.Token)
        console.log(res.data.Token)
      })
      .catch()
    } 
    function register(data){
      axios.post('http://localhost:5000/api/user/register',{"fname":`${data.fname}`,"lname":`${data.lname}`,"st_id":data.stid,"email":`${data.email}`,"password":`${data.password}`},{})
      .then(res=>{
        if(res.err){
          alert(res.err)
        }
        else{
          alert(res.result)
        }
      })
      .catch()
    } 
    useEffect(()=>{
      console.log(JWT) 
      jwt = JWT 
      console.log(jwt)
    },[JWT])
  return (
   
    <Router>
      <Routes>
        <Route path="/login" element={<Login login = {login} register={register}/>}/>
        <Route path="/register" element={<Register submitForm={submitform}/>}/>
        <Route path='/home' element={<AppChart JWT={JWT}/>}/>
        <Route path='/' element={<Main JWT={JWT}/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

const Main=()=>{
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(jwt)
    const gotoHomePage = ()=> navigate('/home')
    const gotoLogin = ()=> navigate('/login')
    if(jwt) gotoHomePage()
    else gotoLogin()
  },[jwt])
  return(
    <div></div>
  )
}