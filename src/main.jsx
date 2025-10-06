import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Cartoonimator from './assets/research/cartoonimator.png'
import Beholder from './assets/research/beholder2.png'
import RigADoodle from './assets/rigadoodle/theme.png'

function Home() {
  return (
    <div className='App'>
      <Head title={"Hello! I'm Krithik Ranjan"} />
      
      <div className='Body'>
        <p>I'm a Ph.D. candidate in <a href='https://www.colorado.edu/atlas/academics/grad/ctd-phd'>Creative Technology and Design (CTD)</a> at the ATLAS Institute, University of Colorado Boulder, where I am advised by <a href="https://www.colorado.edu/atlas/ellen-yi-luen-do">Prof. Ellen Do</a> and <a href="https://www.colorado.edu/atlas/michael-rivera">Prof. Michael Rivera</a>.</p>
        <p>I am a designer, engineer, and researcher passionate about imagining and developing innovative interactive technologies. In my Ph.D., I am exploring creative learning technologies and tangible, multimodal interfaces. I develop creative tools that enable students and beginners to tinker with computing and engage with computational thinking. </p>
        <p>I received my B.Sc. in Electrical and Computer Engineering from Cornell University in May 2022, where I worked with <a href="https://www.hybridbody.human.cornell.edu/">Prof. Cindy Hsin-Liu Kao</a>, <a href="https://mdtl.human.cornell.edu/">Prof. Jay Yoon</a>, and <a href="https://www.csl.cornell.edu/~cbatten/">Prof. Christopher Batten</a>.</p>
      </div>

      <div className="Nav-menu">
        <div className="Nav-item"><a href="/pages/projects.html">PROJECTS</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/publications.html">PUBLICATIONS</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/photos.html">PHOTOS</a></div><div>&#9671;</div>
      </div>

      <h3>Selected Work</h3>

      <div className='Project-grid'>
        <div className='Project'>
          <div className="Project-image">
              <img src={Cartoonimator}  alt="Cartoonimator" />
          </div>
          <div className="Project-info">
              <a href="/pages/cartoonimator.html"><h4>Cartoonimator &#9671;</h4></a>
              <p>A paper-based kit for creating keyframe animations from drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={RigADoodle}  alt="Rig-A-Doodle" />
          </div>
          <div className="Project-info">
              <a href="/pages/rigadoodle.html"><h4>Rig-A-Doodle &#9671;</h4></a>
              <p>Tangible toolkit for character-rigging animation with drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={Beholder}  alt="Beholder" />
          </div>
          <div className="Project-info">
              <a href="/pages/physcomp.html"><h4>CV-driven Physical Computing &#9671;</h4></a>
              <p>Integrating electronics and CV approaches for designing physical interactions.</p>
          </div>
        </div>
      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
