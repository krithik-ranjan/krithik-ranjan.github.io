import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Beholder from './assets/research/beholder.png'
import Beholder2 from './assets/research/beholder2.png'
import PaperPlayground from './assets/physcomp/paper_playground.jpg'
import BeholderElectron from './assets/physcomp/beholder_electron.jpg'

import red from './assets/shape-red.svg'
import green from './assets/shape-green.svg'
import yellow from './assets/shape-yellow.svg'
import purple from './assets/shape-purple.svg'

function PhysComp() {
  return (
    <div className='App'>
      <Head />

      <h3>CV-driven Physical Computing</h3>

      <div className="Nav-menu">
        <div className="Nav-item"><a className='A-Red' href="https://dl.acm.org/doi/10.1145/3550471.3564764">BEHOLDER PAPER</a><img src={red} /></div>
        <div className="Nav-item"><a className='A-Green' href="https://github.com/project-beholder/beholder-app">BEHOLDER GITHUB</a><img src={green} /></div>
        <div className="Nav-item"><a className='A-Yellow' href="https://dl.acm.org/doi/10.1145/3689050.3705981">PAPER PLAYGROUND PAPER</a><img src={yellow} /></div>
      </div>
      
      <div className='Body'>  
        
        <p>Physical computing is an engaging domain for learners to explore computing by creating interactive, tangible projects in an open-ended, hands-on manner. It involves combining software and hardware approaches to build artifacts that sense and respond to the real world. In this project, I introduce an alternative, no-electronics mode of physical computing using paper and computer vision.</p> 

        <p>I collaborated with <a href="https://www.petergyory.com/index.html">Peter Gyory</a> and <a href="https://clementzheng.info/">Clement Zheng</a> to develop Beholder, a CV platform that transforms 2D fiducial markers into a material for physical computing. Beholder is graphical programming and design editor that supports people to connect different parameters of these markers (such as presence, position, and rotation) to keyboard input. This enables CV-driven interfaces to control any software that takes keyboard as an input.</p>

        <div style={{"display": "flex", "flexDirection": "row", "gap": "20px", "alignItems": "center"}} >
          <img src={Beholder2} alt="Beholder interface" width="50%" style={{ "display": "inline-block", "margin": "0 auto"}}/> 
          <img src={Beholder} alt="Beholder program" width="50%" style={{ "display": "inline-block", "margin": "0 auto"}}/>
        </div>
        
        <p>To expand the possible output in such a platform, I have been exploring the design space of a hybrid, CV and electronics-based physical computing toolkit. I ask, "what creative opportunities might a multimodal physical computing toolkit enable?"</p>
          
        <p>I worked with <a href="https://cucraftlab.org/">Ann Eisenberg</a> and the <a href="https://phetsims.github.io/paper-land/">Paper Playground</a> team to integrate their CV-based platform with the micro:bit. I experimented and developed prototypes to examine how CV-detected paper-based input may augment the traditional physical computing paradigm, and how integrating electronic components into CV-driven systems may provide additional creative possibilities.</p>

        <img src={PaperPlayground} width="100%" alt="Paper Playground explorations" />

        <p>Learning from my experiences with Beholder and Paper Playground, I am currently designing Beholder Electron, an expansion and revamp of the Beholder platform to support CV-driven physical computing projects with electronics, IoT, and OSC communication.</p>

        <img src={BeholderElectron} width="80%" alt="Beholder Electron" style={{ "display": "block", "margin": "0 auto"}}/> 

      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhysComp />
  </StrictMode>,
)
