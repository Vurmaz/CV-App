import React from "react"
import  Typography  from "@mui/material/Typography"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import Grid from '@mui/material/Grid'
import useMediaQuery from "@mui/material/useMediaQuery";
function Header({index}) {
    const matches = useMediaQuery('(max-width:810px)')
    return(
    <>
        <Box sx={[ {flexGrow: 1}, {width: () => (matches&&index==1) ? '220mm' : '100%'} ]}>
            <AppBar 
                position="static" 
                color='primary' 
                sx={[
                    {
                        boxShadow:"0px 0px 20px 12px rgba(30,81,40,1)",
                    },
                ]}
            >
                <Toolbar>
                    <Grid alignItems="center" container justifyContent="center">
                        <RestorePageIcon fontSize="large"/>
                        <Typography textAlign="center" variant="h2">CV-Converter</Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}
export default Header