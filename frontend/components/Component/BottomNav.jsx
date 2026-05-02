import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { NavLink, useLocation } from 'react-router-dom';
const Breif2=()=>{
    const [value, setValue] = React.useState("home");
    const location= useLocation();
    const ref = React.useRef(null);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <Box ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:"1000" }} elevation={10}>
                <BottomNavigation
                value={location.pathname}
                onChange={handleChange}
                showLabels
                sx={{backgroundColor:"#fff", opacity:"1",
                    "& .Mui-selected": {
                    color: "#000"  
                    },
                    "& .Mui-selected svg": {
                    color: "#000"  
                    },                             
                }}
                elevation={5}
                >
                    <BottomNavigationAction label="Home" value="/" icon={<HomeOutlinedIcon />} component={NavLink} to="/" />
                    <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
                    <BottomNavigationAction label="Shop" value="/shop" icon={<StoreMallDirectoryOutlinedIcon />} component={NavLink} to="/shop"/>
                    <BottomNavigationAction label="Cart" value="/cart" icon={<LocalGroceryStoreOutlinedIcon />} component={NavLink} to="/cart" />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}
export default Breif2;