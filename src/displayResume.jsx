import { useState } from 'react'
import * as pdf from '@react-pdf/renderer'

function DisplayResume({resume, setResume, toggleDisplayMode}) {
  return (
    <div id='display-resume'>
      <button onClick={toggleDisplayMode}>edit resume</button>
      <pdf.PDFViewer id='pdf-viewer'>
        <pdf.Document>
          <pdf.Page>
            
          </pdf.Page>
        </pdf.Document>
      </pdf.PDFViewer>
    </div>
  )
}

export default DisplayResume