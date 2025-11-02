import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import App from './assets/orbitsim/app.jpg'
import Instr from './assets/orbitsim/instructions.png'
import Classroom from './assets/orbitsim/classroom.jpg'

import red from './assets/shape-red.svg'
import green from './assets/shape-green.svg'
import yellow from './assets/shape-yellow.svg'
import purple from './assets/shape-purple.svg'

function OrbitSim() {
  return (
    <div className='App'>
      <Head />

      <h3>OrbitSim</h3>

      <div className="Nav-menu">
        <div className="Nav-item"><a className='A-Red' href="https://atlas-acme-lab.github.io/orbitsim-app/">TRY IT</a><img src={red} /></div>
        <div className="Nav-item"><a className='A-Green' href="https://www.youtube.com/watch?v=sJQlYDNoPIs">VIDEO</a><img src={green} /></div>
        <div className="Nav-item"><a className='A-Yellow' href="https://github.com/atlas-acme-lab/orbitsim-app">GITHUB</a><img src={yellow} /></div>
      </div>
      
      <div className='Body'>  
        <p>Physics education—from elementary to university—supports students to engage with abstract and theoretical ideas, which educators introduce through hands-on, experimental learning. Astronomy education, however, is limited to 2D simulations or superficial activities to represent the dynamics of orbital motion.</p>
        
        <img src={App} width="100%" alt="OrbitSim App" />

        <p><a href="https://anika-mahajan.github.io/#/">Anika Mahajan</a> and I designed OrbitSim, a paper-based interactive toolkit to enable students to draw and simulate their own planetary orbits. We collaborated with university Astronomy educators in over a year-long co-design process to develop the toolkit and an activity and lab curriculum about Kepler's Laws for undergraduates.</p>  
        <img src={Classroom} width="100%" alt="OrbitSim Classroom workshop" />

        <p>This is a zine we created for the students to learn how to use OrbitSim.</p>

        <img src={Instr} width="80%" alt="OrbitSim Instructions" style={{ "display": "block", "margin": "0 auto"}} />

      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrbitSim />
  </StrictMode>,
)
