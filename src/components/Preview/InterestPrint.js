import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function InterestPrint({interests}) {
    return(
        <>
            <Typography variant="h2"  marginTop={1}>Interests</Typography>
            <Grid container  justifyContent="space-evenly" alignItems="center" columnSpacing={12}>
            {
                interests.map((interest, index) => {
                    return(
                        <Grid key={index} item xs={12} textAlign="start"> 
                            <Typography sx={{marginLeft:"5rem"}} variant="p">{`-${interest}`}</Typography>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
}