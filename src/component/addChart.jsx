import { TextField,Paper,Box, isHostComponent, IconButton } from "@mui/material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import React from "react";
class AddChart extends React.Component{
    state={
        name:""
    }
    onChange = e=>{
        this.setState({
            name:e.target.value
        })
    }
    addDevice= e=>{
        e.preventDefault();
        this.props.addDevice(this.state.name)
        this.setState({
            name:""
        })
    }
    render(){
        return(
            <Box component="span" sx={{ p: 2, border: '0cpx dashed grey' }}>
                <Paper elevation={3} style={{
                height:'100%',
                width:'150px',
                padding: 20,
                textAlign:"center",
                margin:'30px auto'  
       }}>
            <form onSubmit={this.addDevice}>
            <TextField
                label="Device name" 
                variant='standard' 
                type="text"
                required
                onChange={this.onChange}
                
                name = 'name'
            />
            <IconButton color="primary" type="submit" >
                <AddCircleSharpIcon style={{fontSize:'50'}} />
            </IconButton>
        </form>
           </Paper>
            </Box>
            
        )
        
    }
}
export default AddChart