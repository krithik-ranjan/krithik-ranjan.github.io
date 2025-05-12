import React from "react";

import './App.css'

import RugExp from './assets/creative/therugexperience.jpg';
import IceAge from './assets/creative/iceagearcade.jpg';
import Typing from './assets/creative/typingslate.png'
import Fast from './assets/creative/fastrobot.jpg';
import ArdSnd from './assets/creative/aroundsound.png';
import PiDog from './assets/creative/pidog.png';
import CroK64 from './assets/creative/crok64.png';


export default function Creative( {setActiveSection} ) {
    return (
        <>
            <div className="Body">
                <p>This page describes some of my creative and technical explorations, blending physical and digital artifacts. Many of these projects emerged from collaborative class work.</p>
            </div>
            <div className="Nav-menu">
                <div className="Nav-item" onClick={() => setActiveSection("research")}>RESEARCH</div><div>&#9671;</div>
                <div className="Nav-item Nav-selected" onClick={() => setActiveSection("creative")}>CREATIVE</div><div>&#9670;</div>
                <div className="Nav-item" onClick={() => setActiveSection("photos")}>PHOTOS</div><div>&#9671;</div>
            </div>
            <div className="Project-grid">
                <div className="Project">
                    <div className="Project-image">
                        <img src={RugExp}  alt="The Rug Experience" />
                    </div>
                    <div className="Project-info">
                        <h3>The Rug Experience</h3>
                        <p>A hand-crafted rug for at-home concert experience with embedded audio-reactive haptic feedback and customizable light display.</p>
                        {/* <p>ATLS 5430 Design Methods, Fall 2022</p> */}
                        <a href="https://youtu.be/L555RzW18kw">VIDEO</a> &#9671; 
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
                        <a href="https://youtu.be/LJaLc6O-K84">VIDEO</a> &#9671; 
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
                        <a href="https://krithik-ranjan.github.io/typing-slate/">WEBSITE</a> &#9671; 
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
                        <a href="https://people.ece.cornell.edu/land/courses/ece4760/FinalProjects/f2021/ak2425_as2537_kr397/ak2425_as2537_kr397/index.html">WEBSITE</a> &#9671; <a href="https://cc-webshop.com/collections/circuit-cellar-2022/products/circuit-cellar-386-september-2022-pdf">ARTICLE</a> &#9671; 
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
                        <a href="https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2021_Projects/May_14/PiDog/Wednesday_kr397_avp34/website/index.html">WEBSITE</a> &#9671; 
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
                        <a href="https://pages.github.coecis.cornell.edu/ece3140-sp2020/avp34-kr397/">WEBSITE</a> &#9671; 
                    </div>
                </div>
            </div>
        </>
    );
}