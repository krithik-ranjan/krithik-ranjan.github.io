import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Setup from './assets/aipuppet/theme.jpg'
import App from './assets/aipuppet/app.png'

import red from './assets/shape-red.svg'
import green from './assets/shape-green.svg'
import yellow from './assets/shape-yellow.svg'
import purple from './assets/shape-purple.svg'

function AIPuppet() {
  return (
    <div className='App'>
      <Head />

      <h3>AI Puppet for Classrooms</h3>
      
      <div className='Body'>
        <p>In collaboration with <a>Suibi Weng</a> and <a>Klara Nitsche</a>, I am developing a tangible DIY kit and curriculum activities to promote AI literacy in K-8 classrooms. The kit enables students to configure their own voice-based, agentic LLMs to engage with AI topics like anthropomorphization, transparency, and safety. The goal is to introduce young students to the prevalent AI technologies in a scaffolded and critical manner. More updates coming soon.</p>

        <img src={App} width="100%" alt="AI Puppet Setup" style={{ "display": "block", "margin": "0 auto"}} />
        <img src={Setup} width="60%" alt="AI Puppet Setup" style={{ "display": "block", "margin": "0 auto"}} />

      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AIPuppet />
  </StrictMode>,
)
