import React from "react"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function SkillPrint({skills}) {
    return(
        <>
            <Typography variant="h2"  marginTop={1}>Skills</Typography>
            <Grid container  justifyContent="space-evenly" alignItems="center" columnSpacing={12}>
            {
                skills.map((skill, index) => {
                    return(
                        <Grid key={index} item xs={12} textAlign="start"> 
                            <Typography sx={{marginLeft:"5rem"}} variant="p">{`-${skill}`}</Typography>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 