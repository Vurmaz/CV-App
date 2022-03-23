import React from "react";
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box'
export default function Interest({interest, changeInterest, clickInterest, interestAnchor, clickAwayInterest}) {
    const id = Boolean(interestAnchor) ? 'simple-popper' : undefined

    return(
<>
    <CssBaseline>
        <Typography marginTop={6} textAlign="center" variant="h3">Interests</Typography>
        <ClickAwayListener onClickAway={clickAwayInterest}>
            <Grid width="70%" margin="0 auto" >
                <TextField 
                    type="text"
                    name="interest"
                    placeholder="Interest"
                    value={interest}
                    onChange={(event) => changeInterest(event)}
                    color="primary"
                    focused
                />
            <Button sx={{marginTop:"1rem", marginBottom:'3rem'}} type="button" color="primary" variant="contained" fullWidth onClick={(event) => clickInterest(event)}>Add</Button>
                <Popper id={id} open={Boolean(interestAnchor)} anchorEl={interestAnchor} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{ marginTop:'5px', border:'1px solid black', p: 1, borderRadius:'6px', bgcolor: '#FF1818', color:'white', boxShadow:' 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)' }}>
                                    Fill inputs correctly
                                    </Box>
                                </Fade>
                            )}
                </Popper>          
            </Grid>
        </ClickAwayListener>
    </CssBaseline>
</>
    )
}