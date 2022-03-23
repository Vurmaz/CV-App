import React from "react";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
export default function Switch({isPreview, changePreview}) {
    return(
        <Grid sx={{marginTop:"2rem"}} width="70%" margin="0 auto">
            <Button size="large" fullWidth variant="contained" color="primary" onClick={()=>changePreview()}>{isPreview ? "Back to Form" : "Preview CV"}</Button>
        </Grid>
    )
}