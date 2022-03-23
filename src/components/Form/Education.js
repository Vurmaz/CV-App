import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Grid from "@mui/material/Grid"
import CssBaseline from '@mui/material/CssBaseline';
import Typography  from '@mui/material/Typography';
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function Education({changeEducationYear, education, changeEducation, submitEducation, educationAnchor, clickAwayEducation}) {   
    const id = Boolean(educationAnchor) ? 'simple-popper' : undefined
    return(
        <CssBaseline>
        <ClickAwayListener onClickAway={clickAwayEducation}>
            <Box component="form" noValidate autoComplete="off" onSubmit={(event)=>submitEducation(event)}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1} width="70%" margin="0 auto" >
                <Typography marginTop={6} variant='h3' textAlign="center">Education Informations</Typography>
                    <Grid item width="100%">
                        <TextField                        
                            id="outlined-required"
                            type='text'
                            name='school'
                            placeholder='School'
                            value={education.school}
                            onChange={(event) => changeEducation(event)}                            
                            required
                            fullWidth
                            color="primary"
                            focused 
                            
                        />
                    </Grid>
                    <Grid item width="100%">
                        <TextField                           
                            id="outlined-required"
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            value={education.subject}
                            onChange={(event) => changeEducation(event)}                            
                            required
                            fullWidth
                            color="primary"
                            focused 
                        />         
                    </Grid>
                    <Grid item width="100%">
                        <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
                            <Grid item md={6} justifyContent="center">
                                <LocalizationProvider sx={{width:'100%'}}  dateAdapter={AdapterDateFns}>
                                    <DatePicker                                      
                                        label="From"
                                        value={education.from}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange={(event) => changeEducationYear(event, 2)}
                                        renderInput={(params) => <TextField {...params} />}
                                        fullWidth
                                        color="primary"
                                        focused 
                                    />
                                </LocalizationProvider> 
                            </Grid>
                            <Grid item md={6} justifyContent="center">
                                <LocalizationProvider  dateAdapter={AdapterDateFns}>
                                    <DatePicker                                       
                                        label="To"
                                        value={education.to}
                                        openTo="year"
                                        views={["year", "month"]}
                                        onChange={(event) => changeEducationYear(event, 3)}
                                        renderInput={(params) => <TextField {...params} />}
                                        fullWidth
                                        color="primary"
                                        focused
                                        
                                    />
                            </LocalizationProvider> 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button 
                    sx={{marginTop:"1rem"}} 
                    color="primary" 
                    size="medium" 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    >
                    Add
                    </Button>

                    <Popper id={id} open={Boolean(educationAnchor)} anchorEl={educationAnchor} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Box sx={{ marginTop:'5px', border:'1px solid black', p: 1, borderRadius:'6px', bgcolor: '#FF1818', color:'white', boxShadow:' 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)' }}>
                                Fill inputs correctly
                                </Box>
                            </Fade>
                        )}
                    </Popper>
                </Grid>
            </Box>
            </ClickAwayListener>
        </CssBaseline>    
    )
}
export default Education