import React from "react";

import './App.css'

import Boulder_11_24 from './assets/photos/Boulder_11-24.jpg';
import Turkey_12_24 from './assets/photos/Turkey_12-24.jpg';
import Fall_9_24 from './assets/photos/Fall_9-24.jpg';
import RMNP_8_24 from './assets/photos/RMNP_8-24.jpg';
import Seattle1_7_24 from './assets/photos/Seattle1_7-24.jpg';
import Seattle2_7_24 from './assets/photos/Seattle2_7-24.jpg';
import Aurora_5_24 from './assets/photos/Aurora_5-24.jpg';
import Portland2_4_23 from './assets/photos/Portland2_4-24.jpg';
import Dunes_3_24 from './assets/photos/Dunes_3-24.jpg';
import NYC_1_23 from './assets/photos/NYC_1-23.jpg';


export default function Photos( {setActiveSection} ) {
    return (
        <>
            <div className="Body">
                <p>In my free time, I like to take photos of interesting things and unique perspectives using either a digital mirrorless camera, or an old film camera. Here are some of my favorite shots.</p>
            </div>
            <div className="Nav-menu">
                <div className="Nav-item" onClick={() => setActiveSection("research")}>RESEARCH</div><div>&#9671;</div>
                <div className="Nav-item" onClick={() => setActiveSection("creative")}>CREATIVE</div><div>&#9671;</div>
                <div className="Nav-item Nav-selected" onClick={() => setActiveSection("photos")}>PHOTOS</div><div>&#9670;</div>
            </div>
            <div className="Photo-grid">
                <div className="Photo-col">
                    <img src={Boulder_11_24} alt="Boulder, 11-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={Fall_9_24} alt="Fall in Colorado, 9-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={Seattle1_7_24} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={Aurora_5_24} alt="Aurora in Colorado, 5-24" onContextMenu={ (e) => e.preventDefault()}/>
                </div>
                <div className="Photo-col">
                    <img src={Turkey_12_24} alt="Turkey, 12-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={RMNP_8_24} alt="RMNP, 8-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={Seattle2_7_24} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
                    <img src={Portland2_4_23} alt="Seattle, 7-24" onContextMenu={ (e) => e.preventDefault()}/>
                </div>                        
            </div>
        </>
    );
}