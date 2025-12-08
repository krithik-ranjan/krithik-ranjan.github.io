import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'
import Nav from './components/Nav'

import Cartoonimator from './assets/research/cartoonimator2.png'
import Beholder from './assets/research/beholder2.png'
import RigADoodle from './assets/research/rigadoodle.png'

function Home() {
  return (
    <div className='App'>
      <Head />
      <h3>Hello! I'm <span href="/" className='Name'>Krithik Ranjan</span>. I am a designer, engineer, and researcher passionate about imagining and developing innovative interactive technologies.</h3>

      <Nav />

      <h4 className='H4-Purple'>Selected Work</h4>

      <div className='Project-grid'>
        <div className='Project'>
          <div className="Project-image">
              <img src={Cartoonimator}  alt="Cartoonimator" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Purple'href="/pages/cartoonimator.html">Cartoonimator</a></h5>
              <p>A paper-based kit to create keyframe animations from drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={RigADoodle}  alt="Rig-A-Doodle" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Purple' href="/pages/rigadoodle.html">Rig-A-Doodle</a></h5>
              <p>Tangible toolkit for character-rigging animation with drawings.</p>
          </div>
        </div>
        <div className='Project'>
          <div className="Project-image">
              <img src={Beholder}  alt="Beholder" />
          </div>
          <div className="Project-info">
              <h5><a className='A-Purple' href="/pages/physcomp.html">CV-driven Physical Computing</a></h5>
              <p>Integrating electronics and CV approaches for designing physical interactions.</p>
          </div>
        </div>
      </div>

      <h4 className='H4-Purple'>About</h4>
      
      <div className='Body'>
        <p>I'm a Ph.D. candidate in <a className='A-Purple' href='https://www.colorado.edu/atlas/academics/grad/ctd-phd'>Creative Technology and Design (CTD)</a> at the ATLAS Institute, University of Colorado Boulder, where I am advised by <a className='A-Purple' href="https://www.colorado.edu/atlas/ellen-yi-luen-do">Prof. Ellen Do</a> and <a className='A-Purple' href="https://www.colorado.edu/atlas/michael-rivera">Prof. Michael Rivera</a>. In my research, I am exploring creative learning technologies and tangible, multimodal interfaces. I develop creative tools that enable students and beginners to tinker with computing and engage with computational thinking.</p>
        <p>I received my B.Sc. in Electrical and Computer Engineering from Cornell University in May 2022, where I worked with <a className='A-Purple' href="https://www.hybridbody.human.cornell.edu/">Prof. Cindy Hsin-Liu Kao</a>, <a className='A-Purple' href="https://mdtl.human.cornell.edu/">Prof. Jay Yoon</a>, and <a className='A-Purple'href="https://www.csl.cornell.edu/~cbatten/">Prof. Christopher Batten</a>.</p>
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
