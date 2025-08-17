import { useState } from 'react'
import './App.css'
import DisplayResume from './displayResume.jsx'

let nextId = 0;
function genId() {
  return nextId++;
}

let initResume = {
  fname: 'Pumpkin',
  lname: 'Lee',
  email: 'pumpkin@gmail.com',
  phoneNumber: '777-7777',
  education: [{
    schoolName: 'University of Hamsterdam', 
    degreeName: 'Bachelor of Science, Zoology', 
    startDate: '2022-01-12',
    endDate: '2023-06-09', 
    id: genId(),
  }],
  experience: [{
    companyName: 'petsmart', 
    jobTitle: 'hamster', 
    jobDescription: '- i ate apple\n- i ran on the wheel', 
    startDate: '2023-09-21',
    endDate: '2025-02-13', 
    id: genId(),
  }]
}

function BasicInfo({resume, handleInput}) {
  return (
    <><h3>Basic Info</h3><div id='basic-info'>
      <label>
        First Name:
        <input
          type='text'
          value={resume.fname}
          onChange={(e) => handleInput({ ...resume, fname: e.target.value })} />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          value={resume.lname}
          onChange={(e) => handleInput({ ...resume, lname: e.target.value })} />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={resume.email}
          onChange={(e) => handleInput({ ...resume, email: e.target.value })} />
      </label>
      <label>
        Phone Number:
        <input
          type='tel'
          value={resume.phoneNumber}
          onChange={(e) => handleInput({ ...resume, phoneNumber: e.target.value })} />
      </label>
    </div></>
  )
}

function Education({resume, handleInput, curId}) {
  const curEdu = resume.education.find(edu => edu.id === curId)
  return (
    <>
      <label>
        School Name: 
        <input 
          type='text' 
          value={curEdu.schoolName} 
          onChange={
            (e) => handleInput({...resume, education: resume.education.map(edu => {
              if (edu.id === curId) {
                return {...edu, schoolName: e.target.value}
              } else {
                return edu
              }
            }
          )})}
        />
      </label>
      <label>
        Degree Name: 
        <input 
          type='text' 
          value={curEdu.degreeName} 
          onChange={
            (e) => handleInput({...resume, education: resume.education.map(edu => {
              if (edu.id === curId) {
                return {...edu, degreeName: e.target.value}
              } else {
                return edu
              }
            }
          )})}
        />
      </label>
      <label>
        Start Date: 
        <input 
          type='date' 
          value={curEdu.startDate} 
          onChange={
            (e) => handleInput({...resume, education: resume.education.map(edu => {
              if (edu.id === curId) {
                return {...edu, startDate: e.target.value}
              } else {
                return edu
              }
            }
          )})}
        />
      </label>
      <label>
        End Date: 
        <input 
          type='date' 
          value={curEdu.endDate} 
          onChange={
            (e) => handleInput({...resume, education: resume.education.map(edu => {
              if (edu.id === curId) {
                return {...edu, endDate: e.target.value}
              } else {
                return edu
              }
            }
          )})}
        />
      </label>
    </>
  )
}

function Experience({resume, handleInput, curId}) {
  const curExp = resume.experience.find(exp => exp.id === curId)
  return (
    <>
      <label>
        Company Name: 
        <input 
          type='text' 
          value={curExp.companyName} 
          onChange={
            (e) => handleInput({...resume, experience: resume.experience.map(exp => {
              if (exp.id === curId) {
                return {...exp, companyName: e.target.value}
              } else {
                return exp
              }
            }
          )})}
        />
      </label>
      <label>
        Job Title:
        <input 
          type='text' 
          value={curExp.jobTitle} 
          onChange={
            (e) => handleInput({...resume, experience: resume.experience.map(exp => {
              if (exp.id === curId) {
                return {...exp, jobTitle: e.target.value}
              } else {
                return exp
              }
            }
          )})}
        />
      </label>
      <label>
        Job Description:
        <textarea 
          value={curExp.jobDescription} 
          onChange={
            (e) => handleInput({...resume, experience: resume.experience.map(exp => {
              if (exp.id === curId) {
                return {...exp, jobDescription: e.target.value}
              } else {
                return exp
              }
            }
          )})}
        />
      </label>
      <label>
        Start Date:
        <input 
          type='date' 
          value={curExp.startDate} 
          onChange={
            (e) => handleInput({...resume, experience: resume.experience.map(exp => {
              if (exp.id === curId) {
                return {...exp, startDate: e.target.value}
              } else {
                return exp
              }
            }
          )})}
        />
      </label>
      <label>
        End Date: 
        <input 
          type='date' 
          value={curExp.endDate} 
          onChange={
            (e) => handleInput({...resume, experience: resume.experience.map(exp => {
              if (exp.id === curId) {
                return {...exp, endDate: e.target.value}
              } else {
                return exp
              }
            }
          )})}
        />
      </label>
    </>
  )
}

function ResumeInput({ resume, setResume, toggleDisplayMode }) {
  function handleSubmit(event) {
    event.preventDefault()
    toggleDisplayMode()
  }

  function addEducation() {
    setResume({
      ...resume,
      education: resume.education.concat({
        schoolName: '', 
        degreeName: '', 
        startDate: '',
        endDate: '', 
        id: genId(),
      })
    })
  }

  function addExperience() {
    setResume({
      ...resume,
      experience: resume.experience.concat({
        companyName: '', 
        jobTitle: '', 
        jobDescription: '', 
        startDate: '',
        endDate: '', 
        id: genId(),
      })
    })
  }

  function resetResume() {
    setResume(initResume)
  }
  
  return (
    <>
      <h2>Enter your information below</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <BasicInfo resume={resume} handleInput={setResume}/>
        <hr />
        <h3>Education</h3>
        <ul>
          {resume.education.map(edu => <li key={edu.id}><Education resume={resume} handleInput={setResume} curId={edu.id} /></li>)}
        </ul>
        <button type='button' onClick={addEducation}>add another education</button>
        <hr />
        <h3>Experience</h3>
        <ul>
          {resume.experience.map(exp => <li key={exp.id}><Experience resume={resume} handleInput={setResume} curId={exp.id} /></li>)}
        </ul>
        <button type='button' onClick={addExperience}>add another experience</button>
        <hr />
        <div id='bottom-buttons'>
          <button type='submit' id='submit-button'>submit</button>
          <button onClick={resetResume} type='button' id='reset-button'>reset</button>
        </div>
      </form>
    </>
  )
}

function App() {
  const [ displayMode, setDisplayMode ] = useState('editResume')
  const [ resume, setResume ] = useState(initResume)

  function toggleDisplayMode() {
    if (displayMode === 'editResume') {
      setDisplayMode('showResume')
    } else {
      setDisplayMode('editResume')
    }
  }

  return (
    <>
      <header>
        <h1>CV Maker</h1>
      </header>
      {displayMode === 'editResume' && <ResumeInput resume={resume} setResume={setResume} toggleDisplayMode={toggleDisplayMode} />}
      {displayMode === 'showResume' && <DisplayResume resume={resume} setResume={setResume} toggleDisplayMode={toggleDisplayMode} id='display-resume' />}
      <footer>
        2025 Caleb Lee
      </footer>
    </>
  )
}

export default App
