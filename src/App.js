import { useState } from "react"
import Header from "./components/Header"
import ContactInfo from "./components/Form/Contact"
import Education from "./components/Form/Education"
import Experiance from "./components/Form/Experiance"
import Print from "./components/Preview/Print"
import Skills from "./components/Form/Skills"
import Interest from "./components/Form/Interest"
import Switch from "./components/Switch"
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme } from "./theme"
import { ThemeProvider } from '@mui/material/styles';




function App() {
  const [contact, setContact] = useState({firstname:'', secondname:'', email:'', phone:'', adress:'', photo:""})
  const [educational, setEducational] = useState([])
  const [education, setEducation] = useState({school:'', subject:'', from:'', to:''})
  const [experiance, setExperiance] = useState([])
  const [work, setWork] = useState({company:'', role:'', from:'', to:''})
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState('')
  const [interests, setInterests] = useState([])
  const [interest, setInterest] = useState('')
  const [isPreview, setIsPreview] = useState(false)
  const [educationAnchor, setEducationAnchor] = useState(null)
  const [workAnchor, setWorkAnchor] = useState(null)
  const [skillAnchor, setSkillAnchor] = useState(null)
  const [interestAnchor, setInterestAnchor] = useState(null)
  const stack = useMediaQuery(theme.breakpoints.down('sm'))
  const matches = useMediaQuery('(max-width:1155px)')
  
  const submitEducation = (event) => {
    event.preventDefault()
    if(Object.values(education).every((item) => item !== "")){
      setEducational([...educational, education])
      setEducation({school:'', subject:'', from:'', to:''})
    } else {
      setEducationAnchor(educationAnchor ? null : event.currentTarget)
    }
    
  }
  const submitWork = (event) => {
    event.preventDefault()
    if(Object.values(work).every((item) => item !== "")){
      setExperiance([experiance, work])
      setWork({company:'', role:'', from:'', to:''})
    } else {
      setWorkAnchor(workAnchor ? null : event.currentTarget)
    }
    
  }
  const changeContact = (event) => {
    const name = event.target.name
    const value = event.target.value
    setContact({...contact, [name] : value}) 
  }

  const changeEducation = (event) => {
    const name = event.target.name
    const value = event.target.value
    setEducation({...education, [name] : value})
    
  }
  const changeWork = (event) => {
    const name = event.target.name
    const value = event.target.value
    setWork({...work, [name] : value})    
  }
  const changePhoto = (event) => {
    const name = event.target.name
    const value = event.target.files[0]
    const fReader = new FileReader()
    fReader.readAsDataURL(value)
    fReader.addEventListener('load', () => {
      setContact({...contact, [name] : fReader.result})
    }) 
  }
  const changeEducationYear = (date, index) => {
    const value = date
    setEducation({...education, [Object.keys(education)[index]] : value})
  }
  const changeWorkYear = (date, index) => {
    const value = date
    setWork({...work, [Object.keys(work)[index]] : value})
  }
  const changeSkill = (event) => {
    setSkill(event.target.value)
  }
  const clickSkill = (event) => {
    if(skill.length < 1){
      setSkillAnchor(skillAnchor ? null : event.currentTarget)
    }
    setSkills([skills, skill])
    setSkill('')
  }
  const changeInterest = (event) => {
    setInterest(event.target.value)
  }
  const clickInterest = (event) => {
    if(interest.length < 1){
      setInterestAnchor(interestAnchor ? null : event.currentTarget)
    }
    setInterests([interests, interest])
    setInterest('')
  }
  const changePreview = () => {
      setIsPreview(!isPreview)
  }
  const clickAwayWork = () => {
    setWorkAnchor(null)
  }
  const clickAwayEducation = () => {
    setEducationAnchor(null)
  }
  const clickAwayInterest = () => {
    setInterestAnchor(null)
  }
  const clickAwaySkill = () => {
    setSkillAnchor(null)
  }
  
  if(isPreview){
    return(
      <>
  <ThemeProvider theme={theme}>
    <Header index={1} />
    <Grid 
    className="fade"
    sx={[
    {
      border:"2px solid black",
      borderRadius:'12px',
      margin:'0 auto',
      marginTop:'2rem',
      boxShadow:"0px 0px 29px 0px rgba(0,0,0,0.75)",
      padding:'1rem',
      marginBottom:'2rem'
    },
    {
      width: () => matches ?  '220mm' : '70%'
    }
    ]} 
    >
      <Switch isPreview={isPreview} changePreview={changePreview} />
      <Print contact={contact} educational={educational} experiance={experiance} skills={skills} interests={interests} /> 
    </Grid>   
  </ThemeProvider>
      </>

    )
 
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <Grid
      className="fade"
      sx={[
        {
        border:"2px solid black", 
        borderRadius:'12px',
        margin:'0 auto', 
        marginTop:'2rem',
        boxShadow:"0px 0px 29px 0px rgba(0,0,0,0.75)",
        marginBottom:'2rem'
        },
        {
        width:() => stack ? '90%' : '70%'
        }
        ]}
        >
        <Switch 
          isPreview={isPreview} 
          changePreview={changePreview}           
        />
        <ContactInfo 
          contact={contact} 
          changeContact={changeContact} 
          changePhoto={changePhoto}
        />
        <Education 
          changeEducationYear={changeEducationYear} 
          education={education} 
          changeEducation={changeEducation} 
          submitEducation={submitEducation} 
          educationAnchor={educationAnchor} 
          clickAwayEducation={clickAwayEducation}
        />
        <Experiance 
          changeWorkYear={changeWorkYear} 
          work={work} 
          changeWork={changeWork} 
          submitWork={submitWork} 
          workAnchor={workAnchor} 
          clickAwayWork={clickAwayWork}  
        />
        <Skills 
          skill={skill} 
          changeSkill={changeSkill} 
          clickSkill={clickSkill} 
          skillAnchor={skillAnchor}
          clickAwaySkill={clickAwaySkill}
        />
        <Interest 
          interest={interest} 
          changeInterest={changeInterest} 
          clickInterest={clickInterest}
          interestAnchor={interestAnchor} 
          clickAwayInterest={clickAwayInterest}          
        />
      </Grid>
    </ThemeProvider>
    </>
    
  )
}

export default App
