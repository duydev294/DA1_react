import ChartModule from "./chartItem";
import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
class Chart_region extends React.Component{
        state={
            devices:[]
        }
        
    render(){
       
        
        return(
            
        (this.props.devices)
        ?this.props.devices.map(device =>(
            
                <ChartModule data={device} API={device[0].API} />
                
            
        ))
        :('Nothing')
            
            
           
        )
    }
}
export default Chart_region