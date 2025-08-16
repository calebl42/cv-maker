import { useMemo } from 'react'
import * as pdf from '@react-pdf/renderer'

function ResumePDF() {
  return (
    <pdf.Document>
        <pdf.Page>
          <pdf.Text>buns</pdf.Text>
        </pdf.Page>
    </pdf.Document>
  )
}
function DisplayResume({resume, setResume, toggleDisplayMode}) {
  return (
    <div id='display-resume'>
      <pdf.PDFDownloadLink document={<ResumePDF />} fileName='resume.pdf'>
        {({ loading }) =>
          loading ? 'preparing your resume...' : <button>download resume</button>
        }
      </pdf.PDFDownloadLink>
      <button onClick={toggleDisplayMode}>edit resume</button>
      <pdf.PDFViewer id='pdf-viewer'>
        <ResumePDF />
      </pdf.PDFViewer>
    </div>
  )
}

export default DisplayResume