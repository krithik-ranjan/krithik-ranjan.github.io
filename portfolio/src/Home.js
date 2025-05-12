import React from "react";

import './App.css'

export default function Home( {setActiveSection} ) {
    return (
        <>
            <div className="Body">
                <p>I'm a Ph.D. student in <a href='https://www.colorado.edu/atlas/academics/grad/ctd-phd'>Creative Technology and Design (CTD)</a> at the ATLAS Institute, University of Colorado Boulder, where I am advised by <a href="https://www.colorado.edu/atlas/ellen-yi-luen-do">Prof. Ellen Do</a> and <a href="https://www.colorado.edu/atlas/michael-rivera">Prof. Michael Rivera</a>.</p>
                <p>I am working towards the goal of enabling students from any economic background to tinker with technology and engage with computational thinking, even if they do not have access to computing devices. I explore and design low-cost technological solutions that not only teach children about computing but also enable them to create with technology and learn computational skills and practices.</p>
                <p>I received my B.Sc. in Electrical and Computer Engineering from Cornell University in May 2022, where I worked with <a href="https://www.hybridbody.human.cornell.edu/">Prof. Cindy Hsin-Liu Kao</a>, <a href="https://mdtl.human.cornell.edu/">Prof. Jay Yoon</a>, and <a href="https://www.csl.cornell.edu/~cbatten/">Prof. Christopher Batten</a>.</p>
            </div>
            <div className="Nav-menu">
                <div className="Nav-item" onClick={() => setActiveSection("research")}>RESEARCH</div><div>&#9671;</div>
                <div className="Nav-item" onClick={() => setActiveSection("creative")}>CREATIVE</div><div>&#9671;</div>
                <div className="Nav-item" onClick={() => setActiveSection("photos")}>PHOTOS</div><div>&#9671;</div>
            </div>
        </>
    );
}
