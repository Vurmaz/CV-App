import React from 'react';
import ReactToPrint from 'react-to-print';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { ComponentToPrint } from './ComponentToPrint.js';

export default class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return(
              <Grid width="70%" margin="0 auto" marginTop={1} marginBottom={2}>
                <Button fullWidth variant='contained' color='primary'>Print Page</Button>
              </Grid>
            ) 
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint contact={this.props.contact} educational={this.props.educational} experiance={this.props.experiance} skills={this.props.skills} interests={this.props.interests}  ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}