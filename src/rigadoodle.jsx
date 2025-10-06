import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Teaser from './assets/rigadoodle/teaser.jpg'
import Demo from './assets/rigadoodle/demo.gif'

function RigADoodle() {
  return (
    <div className='App'>
      <Head title={"Rig-A-Doodle"} />
      
      <div className='Body'>  
        <p>Rig-A-Doodle is a tangible toolkit that invites children and beginners to experience character animations from the ground up. With this kit, you can draw a character, construct a skeleton or “rig” for it using everyday materials, and then manipulate it to see your character come to life. Inspired by <a href="https://sketch.metademolab.com/">Animated Drawings</a> project at Meta.</p>

        <img src={Teaser} width="80%" alt="Rig-A-Doodle concept" style={{ "display": "block", "margin": "0 auto"}} />

        <p>I am designing Rig-A-Doodle as a "kit with no parts"; i.e., it allows you to create your rig with any materials like clay and sticks to foster flexibility and tinkering. The Rig-A-Doodle application uses computer vision (CV) and As-Rigid-As-Possible (ARAP) deformation to animate your drawings. Here is an early prototype demonstration and the app interface that will be live soon.</p>

        <img src={Demo} width="80%" alt="Rig-A-Doodle Demo" style={{ "display": "block", "margin": "0 auto"}}/> 
        
      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RigADoodle />
  </StrictMode>,
)
