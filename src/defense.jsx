import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import DissertationCover from'./assets/research/dissertation-cover.png'

function Comp() {
  return (
    <div className='App'>
      <Head />
      
      <h3>Krithik Ranjan's Dissertation Defense</h3>

      <div className='Body-defense'>
        <div className="Body-defense-col">
          <div className="Exam-info">
            <div className='Info-item'>
              <span className='Label'>Title</span>
              <span>Computing Outside Computers: Designing Material Interfaces for Creative Thinking</span>
            </div>
            <div className='Info-item'>
              <span className='Label'>Date</span>
              <span>Tuesday, April 7th 2026 at 8:00 AM MDT (GMT-0600)</span>
            </div>
            <div className='Info-item'>
              <span className='Label'>Location</span>
              <span>Hackery (ATLS 208) or <a href="
https://cuboulder.zoom.us/j/97506727714" target="_blank" rel="noopener noreferrer">Zoom (
https://cuboulder.zoom.us/j/97506727714)</a></span>
            </div>
            <div className='Info-item'>
              <span className='Label'>Committee</span>
              <span>Ellen Yi-Luen Do (Chair), Michael L. Rivera, Ricarose Roque, Ann Eisenberg, Amos Blanton, Clement Zheng</span>
            </div>
            <div className='Info-item'>
              <span className='Label'>Document</span>
              <span>Linked <a href="https://o365coloradoedu-my.sharepoint.com/:b:/g/personal/krra7012_colorado_edu/IQBXB0cLtZgUSJH03DLBA2w4AUKtDYPE5uurHW1ocKN8aF0?e=3f1VIO" target="_blank" rel="noopener noreferrer">here</a></span>
            </div>
          </div>

          <h5>Recording</h5>

          <iframe width="720" height="360" src="https://www.youtube.com/embed/tN7bMnC8RVc?si=frLo1CyfZtVc05xT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <h5>Presentation</h5>

          <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="420" src="https://embed.figma.com/proto/2xPHZwrtETBB5WTAw2t00x/PhD-Defense---Krithik-Ranjan?node-id=702-750&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=702%3A2&starting-point-node-id=702%3A750&embed-host=share"></iframe>

          <h5>Abstract</h5>
          <p>Since the beginning of computing technology, we have used it as an extension of our creativity. Whether it is to create music, produce art, develop interactive games, or write a novel; this creative potential of technology to realize my wild ideas is what first engaged me with computers. Our interactions with computers seem to have evolved separately from the profound material history of humanity, converging to these small glass screens with touch or button input for "efficient" interaction. On one hand, we sketch with charcoal or sculpt with clay on a wheel, and on the other, we use mouse clicks (and now text prompts) to make digital art or 3D models. In my research, I explore how we can bring creative technologies back to being a natural, craft-like practice by designing technology interactions based on physical materials like paper and cardboard. I present creative technology experiences I designed collaboratively to support open-ended creativity and tinkering across domains like animation, science simulation and physical computing.</p>
          <p>This dissertation is a case for moving from <strong>tangible computing</strong> to <strong>material computing</strong> as a way to interact with computing technologies through deeper material engagement, where users (makers) work with physical materials to design their own technology interactions. By describing three types of environments for creative computing and documenting stories from makers creating with each, I demonstrate how we can support creative problem solving and computational thinking through such material computing interfaces that offer an expressive, explorative, and playful means for creativity. In this research, I envision a future of creative technology interactions that relies on an open-ended, material-based environment and offers users the freedom to be makers of their own technology worlds.</p>
        </div>

        

        <div className='Body-defense-col'>
          {/* <iframe src="https://o365coloradoedu-my.sharepoint.com/personal/krra7012_colorado_edu/_layouts/15/embed.aspx?UniqueId=1d49756f-9b8b-46fb-8e2f-c1ad6ddc14ee" width="640" height="960" frameborder="0" scrolling="no" allowfullscreen title="Krithik Ranjan - Dissertation Draft 3-23"></iframe> */}
          <a href='https://o365coloradoedu-my.sharepoint.com/:b:/g/personal/krra7012_colorado_edu/IQBXB0cLtZgUSJH03DLBA2w4AUKtDYPE5uurHW1ocKN8aF0?e=3f1VIO' target='_blank' rel='noopener noreferrer'>
            <img src={DissertationCover} alt="Dissertation Cover" width="100%" />
          </a>
        </div>

      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp />
  </StrictMode>,
)
