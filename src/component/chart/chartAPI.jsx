import React from "react";
import {Typography} from"@mui/material"
class APIinfo extends React.Component{
    render(){
        return(
            <div>
            <Typography gutterBottom variant="h5" component="div">
                API Key:
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {this.props.API}
          </Typography>
          </div>
        )
    }
}
export default APIinfo