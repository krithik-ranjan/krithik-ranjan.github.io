import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'
import Nav from './components/Nav'

import Cartoonimator from './assets/research/cartoonimator2.png'
import RigADoodle from './assets/research/rigadoodle.png'
import Beholder from './assets/research/beholder2.png'
import OrbitSim from './assets/research/orbitsim.png'
import AIPuppet from './assets/aipuppet/theme.jpg'
import RugExp from './assets/creative/therugexperience.jpg'
import IceAge from './assets/creative/iceagearcade.jpg'
import Typing from './assets/creative/typingslate.png'
import ArdSnd from './assets/creative/aroundsound.png'
import PiDog from './assets/creative/pidog.png'
import CroK64 from './assets/creative/crok64.png'

function Projects() {
  return (
    <div className='App'>
      <Head />
      
      <div className='Body'>
        <p>In my research, I study how we can utilize everyday materials like paper to support creative processes and problem solving in computing applications. Leveraging these materials and ubiquitous devices like smartphones and cameras, I design low-cost tangible interfaces to engage children and novices with computing in a creative, tinkering manner.</p>
      </div>

      <Nav active='Projects' />

      {/* <div className="Nav-menu">
        <div className="Nav-item"><a href="/pages/projects.html"><strong>PROJECTS</strong></a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/publications.html">PUBLICATIONS</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/photos.html">PHOTOS</a></div><div>&#9671;</div>
      </div> */}

      <h4 className='H4-Red'>Research</h4>

      <div className='Project-grid'>
        <div className='Project'>
          <div className="Project-image">
              <img src={Cartoonimator}  alt="Cartoonimator" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Red'href="/pages/cartoonimator.html">Cartoonimator</a></h5>
              <p>A paper-based kit to create keyframe animations from drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={RigADoodle}  alt="Rig-A-Doodle" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Red' href="/pages/rigadoodle.html">Rig-A-Doodle</a></h5>
              <p>Tangible toolkit for character-rigging animation with drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={Beholder} alt="Beholder" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Red' href="/pages/physcomp.html">CV-driven Physical Computing</a></h5>
              <p>Integrating electronics and CV approaches for designing physical interactions.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={OrbitSim} alt="OrbitSim" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Red' href="/pages/orbitsim.html">OrbitSim</a></h5>
              <p>Learner-driven, paper-based simulation of planetary orbits and Kepler's laws.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={AIPuppet}  alt="Beholder" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Red' href="/pages/aipuppet.html">AI Puppet for Classrooms</a></h5 >
              <p>DIY Kit and curriculum for AI literacy in K-8 classrooms.</p>
          </div>
        </div>
      </div>
      
      <h4 className='H4-Red'>Creative</h4>

      <div className="Project-grid">
        <div className="Project">
          <div className="Project-image">
            <img src={RugExp}  alt="The Rug Experience" />
          </div>
          <div className="Project-info">
            <h5>The Rug Experience</h5>
            <p>A hand-crafted rug for at-home concert experience with embedded audio-reactive haptic feedback and customizable light display.</p>
            {/* <p>ATLS 5430 Design Methods, Fall 2022</p> */}
            <a className='A-Red' href="https://youtu.be/L555RzW18kw">VIDEO</a>&emsp;/ 
          </div>
        </div>
        <div className="Project">
          <div className="Project-image">
            <img src={IceAge}  alt="Ice Age Arcade" />
          </div>
          <div className="Project-info">
            <h3>Ice Age Arcade</h3>
            <p>A science museum exhibit designed to represent the relationship between the Milankovitch cycles and the ice ages.</p>
            {/* <p>ATLS 5519 Designing a Science Exhibit, Fall 2022</p> */}
            <a className='A-Red' href="https://youtu.be/LJaLc6O-K84">VIDEO</a>&emsp;/ 
          </div>
        </div>
        <div className="Project">
          <div className="Project-image">
            <img src={Typing}  alt="Typing Slate" />
          </div>
          <div className="Project-info">
            <h3>Typing Slate</h3>
            <p>A web-based drawing machine to create visual art from words, based on the position of letters on a QWERTY keyboard.</p>
            {/* <p>ATLS 5430 Design Methods, Fall 2022</p> */}
            <a className='A-Red' href="https://krithik-ranjan.github.io/typing-slate/">WEBSITE</a>&emsp;/
          </div>
        </div>
        <div className="Project">
          <div className="Project-image">
            <img src={ArdSnd}  alt="AroundSound" />
          </div>
          <div className="Project-info">
            <h3>AroundSound</h3>
            <p>An aid to help the visually impaired navigate through their surroundings using directional sounds. Published in Circuit Cellar Magazine #386 September 2022.</p>
            {/* <p>ECE 4760 Digital Systems Design with Microcontrollers, Fall 2021</p> */}
            <a className='A-Red' href="https://people.ece.cornell.edu/land/courses/ece4760/FinalProjects/f2021/ak2425_as2537_kr397/ak2425_as2537_kr397/index.html">WEBSITE</a>&emsp;/&emsp;<a className='A-Red' href="https://cc-webshop.com/collections/circuit-cellar-2022/products/circuit-cellar-386-september-2022-pdf">ARTICLE</a>&emsp;/ 
          </div>
        </div>
        <div className="Project">
          <div className="Project-image">
            <img src={PiDog}  alt="PiDog" />
          </div>
          <div className="Project-info">
            <h3>PiDog</h3>
            <p>A pet robot built with the Raspberry Pi that can be trained to recognize hand gestures and taught new voice commands just like a real dog.</p>
            {/* <p>ECE 5725 Designing with Embedded OS, Spring 2021</p> */}
            <a className='A-Red' href="https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2021_Projects/May_14/PiDog/Wednesday_kr397_avp34/website/index.html">WEBSITE</a>&emsp;/ 
          </div>
        </div>
        <div className="Project">
          <div className="Project-image">
            <img src={CroK64}  alt="CroK64" />
          </div>
          <div className="Project-info">
            <h3>CroK64</h3>
            <p>An online, multiplayer version of the classic backyard game, croquet, with an embedded controller to hit the ball on screen.</p>
            {/* <p>ECE 3140 Embedded Systems, Spring 2020</p> */}
            <a className='A-Red' href="https://pages.github.coecis.cornell.edu/ece3140-sp2020/avp34-kr397/">WEBSITE</a>&emsp;/
          </div>
        </div>
    </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
)
