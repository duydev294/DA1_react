import React from "react";
import ChartModule from "./chart/chartItem";
import { useState } from "react";
import {api,account} from "../api"
import axios from "axios";
import Chart_region from "./chart/chart";
import ButtonAppBar from "./header/header";
import Box from '@mui/material/Box'
import AddChart from "./addChart";
class AppChart extends React.Component{
    state ={
        user:{},
        device:[],
        device_api:[],
        device_info:[],
        jwt:' '
    }
    componentDidMount(){
        axios.post('http://localhost:5000/api/user/login',{"email":`duy123@gmail.com`,"password":`123456`},{})
      .then(res=>{
       
        console.log(res.data.Token)
        this.setState({jwt:res.data.Token})
        console.log(this.state.jwt)
        if(this.state.jwt.trim()){
            axios.post('http://localhost:5000/api/user/get_user',{},{headers:{"Authorization":`${this.state.jwt}`}})
            .then(res=>{this.setState({user:res.data})
            console.log(this.state.user)
            this.state.user.devices.map((device)=>{this.setState({device_api:this.state.device_api.concat([device.API]),device_info:this.state.device_info.concat([{name: device.device_name, created_time: device.created}])})})
            console.log(this.state.device_api,this.state.device_info)
            this.state.device_api.map(api=>axios.post('http://localhost:5000/api/device/get_data',{'api_device':`${api}`},{headers:{"Authorization":`${this.state.jwt}`}})
                .then(res=>{
                    console.log(res.data.data)
                    this.setState({device:this.state.device.concat([res.data.data])})
                    console.log(this.state.device)
                })
            )})
            .catch(console.log('error'))
        }
        
    
      })
      .catch(console.log('error'))
    } 
        
    
    

    addDevice= (name_device)=>{
        
        if(this.state.jwt)
        console.log(this.state.jwt)
        axios.post('http://localhost:5000/api/device/create',{"name":`${name_device}`},{headers:{"Authorization":`${this.state.jwt}`}})
            .then(res=>{console.log(res)
                alert(res.data.mess)
            })
            .catch(console.log('err'))
    }
    render()
    {
        
        return(
            
            <div>
                <ButtonAppBar/>
                
                <Box sx={{height:'100%'}}>
                        <AddChart addDevice={this.addDevice} />
                    </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                   
                    },
                    height: '90%',
                    marginTop:'16px',
                    justifyContent: 'center'
                    }}
                >
                    
                   
                    <Chart_region devices={this.state.device}/>
                </Box>
                
            </div>
            
            )
    }
   
}
export default AppChart