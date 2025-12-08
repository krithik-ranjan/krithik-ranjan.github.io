import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Cartoonimator_paper from './assets/papers/cartoonimator_paper_tei25.pdf';
import Instr from './assets/cartoonimator/instr.png'
import Components from './assets/cartoonimator/components.png'
import Workshops from './assets/cartoonimator/kids.png'
import SpideyAnim from './assets/cartoonimator/spidey.gif'
import FishcarAnim from './assets/cartoonimator/fishcar.gif'
import HomunculusAnim from './assets/cartoonimator/homunculus.gif'
import SkaterAnim from './assets/cartoonimator/skater.gif'
import SkierImage from './assets/cartoonimator/skier.jpg'
import SkierAnim from './assets/cartoonimator/skier.gif'

import red from './assets/shape-red.svg'
import green from './assets/shape-green.svg'
import yellow from './assets/shape-yellow.svg'
import purple from './assets/shape-purple.svg'

function Cartoonimator() {
  return (
    <div className='App'>
      <Head />

      <h3>Cartoonimator</h3>

      <div className="Nav-menu">
        <div className="Nav-item"><a className='A-Red' href="https://krithik-ranjan.github.io/cartoonimator/">TRY IT</a><img src={red} /></div>
        <div className="Nav-item"><a className='A-Green' href="https://dl.acm.org/doi/10.1145/3689050.3704955">PAPER</a><img src={green} /></div>
        <div className="Nav-item"><a className='A-Yellow' href="https://youtu.be/nwF2i81Sguw">VIDEO</a><img src={yellow} /></div>
        <div className="Nav-item"><a className='A-Purple' href="https://github.com/krithik-ranjan/cartoonimator">GITHUB</a><img src={purple} /></div>
      </div>
      
      <div className='Body'>  
        
        <p>Animation unlocks exciting creative opportunities to express one's ideas and stories. However, creating animations with existing software or tangible interfaces is difficult and time-consuming. In this project, I ask, how can we bring animation back to being a fun and creative craft?</p> 

        <div style={{ "display": "flex", "flexDirection": "row", "gap": "10px", "alignItems": "center", "justifyContent": "center"}} >
          <img src={SkierImage} width="40%" alt="Skier" style={{ "display": "inline-block" }}/> 
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
          <img src={SkierAnim} width="40%" alt="Skier" style={{ "display": "inline-block" }}/> 
        </div>

        <p>I developed Cartoonimator, a paper-based tangible kit for keyframe animation, that enables novice animators to quickly create animations from drawings on paper. The kit—comprising paper templates to draw scenes and characters on, and a mobile web app to capture keyframes and compile the animation—offers an engaging tangible interface for both children and adults to create versatile animations.</p>
        
        <img src={Instr} width="95%" alt="Instructions" style={{ "display": "inline-block" }}/> 

        <p>To animate with Cartoonimator, you first draw your scene background and characters on the paper template. Then, you use the web application to capture the keyframes and play the animation. The application uses computer vision and image processing techniques to transform your keyframe images into seamless animations.</p>

        <img src={Components} width="80%" alt="Components" style={{ "display": "block", "margin": "0 auto"}}/> 
             
        <p>Through workshops and user studies, my team evaluated Cartoonimator's effectiveness in making animation accessible and enjoyable. Participants reported that the tangible approach lowered barriers to entry, encouraged creativity, and made the animation process more intuitive compared to traditional software tools.</p>

        <img src={Workshops} width="80%" alt="Workshops" style={{ "display": "block", "margin": "0 auto", "paddingBottom": "20px"}}/> 

        <p>Here are some of the animations Cartoonimators have created!</p>

        <div style={{"display": "flex", "flexDirection": "row", "gap": "20px", "alignItems": "center", "padding": "0 10% 0 10%"}}>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "20px", "alignItems": "center"}} >
            <img src={SpideyAnim} width="100%" alt="Workshops" style={{ "display": "inline-block", "margin": "0 auto"}}/> 
            <img src={HomunculusAnim} width="100%" alt="Workshops" style={{ "display": "inline-block", "margin": "0 auto"}}/>
          </div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "20px", "alignItems": "center"}} >
            <img src={SkaterAnim} width="100%" alt="Workshops" style={{ "display": "inline-block", "margin": "0 auto"}}/> 
            <img src={FishcarAnim} width="100%" alt="Workshops" style={{ "display": "inline-block", "margin": "0 auto"}}/>
          </div>
        </div>

      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cartoonimator />
  </StrictMode>,
)
