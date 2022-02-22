import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Chart1 from './chart_config';
import APIinfo from './chartAPI';
import Settings from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
function TabPanel(props){
    const {children,value,index, ...other} = props;
    return(
        <Typography
         component="div"
         role='tabpanel'
         hidden={value !== index}
         id={`action-tabpanel-${index}`}
         aria-labelledby={`action-tab-${index}`}
         {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
         

        </Typography>
    );
}
TabPanel.propTypes={
    childen: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};
function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}
export default function ChartModule({data,API}){
    
    const theme = useTheme();
    const [value,setValue]= React.useState(0);
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    } 
    const handleChangeIndex = (index)=>{
        setValue(index);
    }
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };

    const tabs=[
        {   
            label:'Api',
            color:'primary',
            icon: <CodeIcon/>
        },
        {
            label:'Setting',
            color:"primary",
            icon: <SettingsIcon/>
        },
        {
            label:'Infomation',
            color:"primary",
            icon: <InfoIcon/>
        }
    ]
    return(
        <Box
         sx={{
             bgcolor:'Background.paper',
             width: '500px',
             //position: 'relative',
             height: '500px',
             boxShadow:3
         }}
        >
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    variant="fullWidth"
                    aria-label="action tabs example"
                >
                    <Tab icon= {<ShowChartIcon/>} label="Chart" {...a11yProps(0)} />
                    <Tab icon= {<CodeIcon/>} label="API" {...a11yProps(1)} />
                    <Tab icon={<SettingsIcon/>} label="Setting" {...a11yProps(2)} />
                    <Tab icon={<InfoIcon/>} label="Info" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
             index={value}
             onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Chart1 data={data}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <APIinfo API = {API}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Chart1 data={data}/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Chart1 data={data}/>
                </TabPanel>
             </SwipeableViews>
        </Box>
    )
}