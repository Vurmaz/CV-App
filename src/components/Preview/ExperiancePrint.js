import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { getYear } from "date-fns"


export default function ExperiancePrint({experiance}) {
    
    return(
        <CssBaseline>
            <Typography variant="h2"  marginTop={1}>Work Experiance</Typography> 
            
            {
                experiance.map((item, index) => {
                    return(
                        <Grid key={index} container direction="row" justifyContent="space-evenly" spacing={1} alignItems="center">
                            <Grid item container xs={4} alignItems="center">
                                <Typography item variant="h6">{getYear(item.from)}</Typography>
                                <Typography item variant="h6">-</Typography>
                                <Typography item variant="h6">{getYear(item.to)}</Typography>
                            </Grid>
                            <Grid item container xs={4} alignItems="center" gap={2}>
                                <Typography item variant="h6">{item.company}</Typography>
                                <Typography item variant="p">{item.role}</Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </CssBaseline>
    )
}  