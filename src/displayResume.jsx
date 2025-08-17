import { useState, useEffect } from 'react'
import { Document, Page, Text, PDFDownloadLink, PDFViewer, StyleSheet, View, Font } from '@react-pdf/renderer'

Font.register({ family: 'Roboto', src: 'http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf' });

const styles = StyleSheet.create({
  page: { 
    fontFamily: 'Roboto',
    padding: '20px 40px 20px 40px' 
  },
  section: {
    fontSize: '14px',
    margin: '15px'
  },
  title: {
    textAlign: 'center',
    fontSize: '25px',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginLeft: '-5px'
  }
});

function Horizontal() {
  return (
    <hr style={{ borderBottom: '2px solid black' }}/>
  )
}

function ResumePDF({ resume }) {
  return (
    <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>{ resume.fname + ' ' + resume.lname }</Text>
            <Text style={{textAlign: 'center'}}>{resume.email + '        ' + resume.phoneNumber}</Text>  
          </View>
          <Horizontal />
          <View style={styles.section}>
            <Text style={styles.subheading}>Education</Text>
            {resume.education.map(
              edu => <Text key={edu.id}>{edu.schoolName} | {edu.degreeName} | {edu.startDate} to {edu.endDate} </Text>
            )}
          </View>
          <Horizontal />
          <View style={styles.section}>
            <Text style={styles.subheading}>Experience</Text>
            {resume.experience.map(exp => 
              (<div key={exp.id}>
                <Text>
                  {exp.companyName} | {exp.jobTitle} | {exp.startDate} to {exp.endDate}
                </Text>
                <Text>
                  {exp.jobDescription}
                </Text>
              </div>)
            )}
          </View>
        </Page>
    </Document>
  )
}

function DisplayResume({resume, setResume, toggleDisplayMode}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id='display-resume'>
      <div id='display-buttons'>
        <PDFDownloadLink document={<ResumePDF resume={resume}/>} fileName='resume.pdf'>
          {({ loading }) =>
            loading ? 'preparing your resume...' : <button>download resume</button>
          }
        </PDFDownloadLink>
        <button onClick={toggleDisplayMode}>edit resume</button>
      </div>
      <PDFViewer id='pdf-viewer'>
        <ResumePDF resume={resume}/>
      </PDFViewer>
    </div>
  )
}

export default DisplayResume