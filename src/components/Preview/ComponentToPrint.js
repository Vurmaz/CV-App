import React from "react";
import PersonalPrint from "./ContactPrint";
import EducationPrint from "./EducationPrint";
import ExperiancePrint from "./ExperiancePrint";
import SkillPrint from "./SkillPrint";
import InterestPrint from "./InterestPrint";
import Box from '@mui/material/Box'
export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
        <div className="print-page">
            <Box 
              height="4rem"
              marginTop="-2rem" 
              sx={{background:'#4E9F3D', marginTop:'-2rem', marginLeft:'-2.1rem',width:'210mm'}}
              ></Box>
            <PersonalPrint contact={this.props.contact} />
            <EducationPrint educational={this.props.educational}/>
            <ExperiancePrint experiance={this.props.experiance} />
            <SkillPrint skills={this.props.skills} />
            <InterestPrint interests={this.props.interests} />
        </div>
  
    );
  }
}
