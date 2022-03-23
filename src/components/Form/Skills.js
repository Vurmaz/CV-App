import React from "react";
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
export default function Skills({skill, changeSkill, clickSkill, skillAnchor, clickAwaySkill}) {
    const id = Boolean(skillAnchor) ? 'simple-popper' : undefined

    return(
        <CssBaseline>
            <Typography marginTop={6} textAlign="center" variant="h3">Skills</Typography>
            <ClickAwayListener onClickAway={clickAwaySkill}>
            <Grid width="70%" margin="0 auto" >
                <TextField 
                    type="text"
                    name="skill"
                    placeholder="Skill"                    
                    value={skill}
                    onChange={(event) => changeSkill(event)}
                    color="primary"
                    focused
                />
            <Button sx={{marginTop:"1rem"}} type="button" color="primary" variant="contained" fullWidth onClick={(event) => clickSkill(event)}>Add</Button>
                <Popper id={id} open={Boolean(skillAnchor)} anchorEl={skillAnchor} transition>
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
    )
} 