import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Head from './components/Head'
import Foot from './components/Foot'

import Boulder_11_24 from './assets/photos/Boulder_11-24.jpg';
import Turkey_12_24 from './assets/photos/Turkey_12-24.jpg';
import Fall_9_24 from './assets/photos/Fall_9-24.jpg';
import RMNP_8_24 from './assets/photos/RMNP_8-24.jpg';
import Seattle1_7_24 from './assets/photos/Seattle1_7-24.jpg';
import Seattle2_7_24 from './assets/photos/Seattle2_7-24.jpg';
import Aurora_5_24 from './assets/photos/Aurora_5-24.jpg';
import Portland2_4_23 from './assets/photos/Portland2_4-24.jpg';
import Lucerne_6_25 from './assets/photos/Lucerne_6_25.png'
import Stoos_6_25 from './assets/photos/Stoos1_6_25.png'

function Photos() {
  return (
    <div className='App'>
      <Head title={"Krithik Ranjan"} />
      
      <div className='Body'>
        <p>In my free time, I like to take photos of interesting things and unique perspectives using either a digital mirrorless camera, or an old film camera. Here are some of my favorite shots I've taken.</p>
      </div>

      <div className="Nav-menu">
        <div className="Nav-item"><a href="/pages/projects.html">PROJECTS</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/publications.html">PUBLICATIONS</a></div><div>&#9671;</div>
        <div className="Nav-item"><a href="/pages/photos.html"><strong>PHOTOS</strong></a></div><div>&#9671;</div>
      </div>

      <div className="Photo-grid">
        <div className="Photo-col">
          <img src={Stoos_6_25} alt="Stoos, 6-25" onContextMenu={ (e) => e.preventDefault()} />
          <img src={Boulder_11_24} alt="Boulder, 11-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={Fall_9_24} alt="Fall in Colorado, 9-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={Seattle1_7_24} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={Aurora_5_24} alt="Aurora in Colorado, 5-24" onContextMenu={ (e) => e.preventDefault()}/>
        </div>
        <div className="Photo-col">
          <img src={Lucerne_6_25} alt="Lucerne, 6-25" onContextMenu={ (e) => e.preventDefault()} />
          <img src={Turkey_12_24} alt="Turkey, 12-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={RMNP_8_24} alt="RMNP, 8-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={Seattle2_7_24} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
          <img src={Portland2_4_23} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
        </div>                        
      </div>

      <Foot />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Photos />
  </StrictMode>,
)
