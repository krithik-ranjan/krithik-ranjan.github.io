import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

// import Teaser from './assets/rigadoodle/teaser.jpg'
import System from './assets/rigadoodle/system.png'
import Demo from './assets/rigadoodle/demo.gif'

import red from './assets/shape-red.svg'
import green from './assets/shape-green.svg'
import yellow from './assets/shape-yellow.svg'
import purple from './assets/shape-purple.svg'

function RigADoodle() {
  return (
    <div className='App'>
      <Head />
      
      <h3>Rig-A-Doodle</h3>

      <div className="Nav-menu">
        <div className="Nav-item"><a className='A-Red' href="https://rig-a-doodle.onrender.com/">TRY IT</a><img src={red} /></div>
        <div className="Nav-item"><a className='A-Green' href="https://dl.acm.org/doi/10.1145/3731459.3779320">PAPER</a><img src={green} /></div>
        <div className="Nav-item"><a className='A-Yellow' href="https://youtu.be/nwF2i81Sguw">VIDEO</a><img src={yellow} /></div>
        <div className="Nav-item"><a className='A-Purple' href="https://github.com/krithik-ranjan/rig-a-doodle">GITHUB</a><img src={purple} /></div>
      </div>

      <div className='Body'>  
        <p>Character animation remains challenging for novices and children despite advances in digital tools. While recent tangible interfaces have lowered barriers by enabling creators to animate their drawings on paper, they are limited to preset animation sequences and support for only human-like characters. </p>
        <p>Rig-A-Doodle is a tangible toolkit and web application that invites children and beginners to experience character animations from the ground up. With this kit, you can draw a character, construct a skeleton or “rig” for it using everyday materials, and then manipulate it to see your character come to life.</p>

        <p>This project was conducted in collaboration with <a href="https://khushbukshirsagar.weebly.com/about.html">Khushbu Kshirsagar</a> and <a href="">Harrison Jesse Smith</a> </p>

        <img src={System} width="80%" alt="Rig-A-Doodle concept" style={{ "display": "block", "margin": "0 auto"}} />

        <p>We designed Rig-A-Doodle as a "kit with no parts"; i.e., it allows you to create your rig with any materials like clay and sticks to foster flexibility and tinkering. The Rig-A-Doodle application uses computer vision (CV) algorithms and As-Rigid-As-Possible (ARAP) deformation to animate the drawings.</p>

        <p>To animated with Rig-a-Doodle, you first draw the character on the paper template and capture it using the web app. Then, you construct the rig for the character using any materials and assign the "control pins" that will control the character's deformation using the set of CV markers. Once the character drawing and rig has been captured, you can begin manipulating the rig to animate the character in real-time.</p>

        {/* <img src={Demo} width="80%" alt="Rig-A-Doodle Demo" style={{ "display": "block", "margin": "0 auto"}}/>  */}
        
        <div style={{ "display": "flex", "justifyContent": "center", "marginTop": "20px", "marginBottom": "20px" }}>
          <iframe width="720" height="420" src="https://www.youtube.com/embed/jnKX_02ZzHs?si=l6vamm1ba89yu0_U" title="Rig-a-Doodle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
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
