
import TextField from '@mui/material/TextField';
import 'react-phone-input-2/lib/style.css'
import Grid from "@mui/material/Grid"
import  Typography  from "@mui/material/Typography"
import CssBaseline from '@mui/material/CssBaseline';

function ContactInfo({ contact, changeContact, changePhoto }) {
    return (
    <CssBaseline>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1} width="70%" margin="0 auto">
            <Typography marginTop={3} variant='h3' textAlign="center">Personal Informations</Typography>
            <Grid item width="100%" >
                <TextField
                    type='text'
                    name='firstname'
                    placeholder='First Name'
                    value={contact.firstname}
                    onChange={(event) => changeContact(event)}
                    fullWidth
                    color="primary"
                    focused 
                />
            </Grid>
            <Grid item width="100%">
                <TextField
                    type='text'
                    name='secondname'
                    placeholder='Second Name'
                    value={contact.secondname}
                    onChange={(event) => changeContact(event)}
                    fullWidth
                    color="primary"
                    focused 
                    
                />
            </Grid>
            <Grid item width="100%">
                <TextField

                    type='email'
                    name='email'
                    placeholder='E-mail'
                    value={contact.email}
                    onChange={(event) => changeContact(event)}
                    fullWidth
                    color="primary"
                    focused 
                    
                />
            </Grid>
            <Grid item width="100%">
                <TextField
                    type='text'
                    name='phone'
                    placeholder='Phone'
                    value={contact.phone}
                    onChange={(event) => changeContact(event)}
                    fullWidth
                    color="primary"
                    focused 
                    
                />
            </Grid>
            <Grid item width="100%">
                <TextField
                    type='text'
                    name='adress'
                    placeholder='Adress'
                    value={contact.adress}
                    onChange={(event) => changeContact(event)}
                    fullWidth
                    color="primary"
                    focused 
                    
                />
            </Grid>
            <Grid item width="100%">                             
                <TextField
                    type='file'
                    name='photo'
                    placeholder='photo'
                    
                    onChange={(event) => changePhoto(event)}
                    fullWidth   
                    color="primary"
                    focused 
                />
            </Grid>
        </Grid>
    </CssBaseline>
    )
}
export default ContactInfo