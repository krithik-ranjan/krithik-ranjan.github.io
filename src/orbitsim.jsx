import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import App from './assets/orbitsim/app.jpg'
import Instr from './assets/orbitsim/instructions.png'
import Classroom from './assets/orbitsim/classroom.jpg'

function OrbitSim() {
  return (
    <div className='App'>
      <Head title={"OrbitSim"} />

      <div className="Nav-menu">
        <div className="Nav-item"><a href="https://atlas-acme-lab.github.io/orbitsim-app/">TRY IT</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="https://www.youtube.com/watch?v=sJQlYDNoPIs">VIDEO</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="https://github.com/atlas-acme-lab/orbitsim-app">GITHUB</a></div><div>&#9671;</div>
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
