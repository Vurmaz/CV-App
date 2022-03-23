
import React from "react"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import  Box from "@mui/system/Box";


export default function PersonalPrint({contact}) {
    return(
<div>
    <CssBaseline>
        <Grid container>
            <Grid item xs={6}>
                <Grid container spacing={2}  className="contact" justifyContent="flex-start" marginTop={1}>
                    <Grid item xs={12} className="name-contanier" alignItems="center">
                        <Typography variant="h3" >{contact.firstname}</Typography>
                        <Typography variant="h3">{contact.secondname}</Typography>                
                    </Grid>            
                    <Grid container spacing={1} columns={4} gap="1rem" marginTop={2} marginLeft={2} className="contanct-info">
                        <Grid item xs={6} className="contact-wrap">
                            <MailOutlineIcon fontSize="medium" />
                            <Typography variant="p">{contact.email}</Typography>
                        </Grid>
                        <Grid item xs={6} className="contact-wrap">
                            <PhoneOutlinedIcon fontSize="medium" />
                            <Typography variant="p">{contact.phone ? `+${contact.phone}`: ""}</Typography>
                        </Grid>
                        <Grid item xs={6} className="contact-wrap">
                            <HomeOutlinedIcon fontSize="medium" />
                            <Typography variant="p">{contact.adress}</Typography>
                        </Grid>
                    </Grid>  
                </Grid>
                </Grid>
                <Box item xs={6} className="photo-frame">
                    <img className="image" src={contact.photo ? contact.photo : 'https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png'} alt='cv'></img>
                </Box>
            </Grid>
        </CssBaseline>
</div>
    )
}