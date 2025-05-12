import logo from './logo.svg';
import './App.css';

import CV from './assets/CV_KrithikRanjan.pdf';

export default function Comp() {
    return (
        <div className='App'>
            <div className="App-header">
                <a href="https://krithik-ranjan.github.io/">
                <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Hello! I'm Krithik Ranjan</h1>
            </div>

            <div className="Body">
                <p>This is the companion page to my Ph.D. Comprehensive Exam on May 12, 2025. Here, I present my dissertation proposal, titled <b>Creative Computing in the Real World with Paper</b>. Please find the relevant documents below.</p>

                <h3>Slides</h3>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS58MkY26cd1yVhn7Q1PJNbGnEYA2Hyp_yy1tFxaBxFOTvMpyLoM-meAyQyCqs99qLSCQGTHfWFTUkr/pubembed?start=false&loop=false&delayms=60000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

                <h3>Proposal Document</h3>
                <p>Linked <a href="https://drive.google.com/file/d/1KBGfDkkrEpPohP8RQ0FFJ3FZKb0Afqj1/view">here</a>.</p>
                <iframe src="https://drive.google.com/file/d/1KBGfDkkrEpPohP8RQ0FFJ3FZKb0Afqj1/preview" width="100%" height="640" allow="autoplay"></iframe>

                <h3>Abstract</h3>
                <p>Since the beginning of computer technology, humans have used it as a creative avenue, whether it is to create music, produce art, develop games, etc. The creative potential of computers is what first engaged me to realize my wild ideas. Over the decades, researchers and educators have built numerous creative learning experiences to engage beginners with computing. However, today, most creative computing applications have converged to a screen-based interfaces, making them potentially restrictive and also less approachable for new creators. In this dissertation proposal, I explore how we can bring creative technologies back to a craft-like practice with the help of paper and other common materials. I introduce creative learning experiences I designed to engage beginners with computing in an open-ended, playful manner in the physical world. I utilize the techniques of computer vision (CV) to translate tangible interactions with the supporting creative applications. CV offers a no-electronics, low-cost approach to build physical interfaces to interact with computers.</p>
                <p>In this proposal, I first explore the design space for existing tangible interfaces for creative learning. Then, I describe how I designed interfaces for creative learning with paper and CV for two creative computing domains — animation and physical computing. Further, I reflect on workshops and evaluations I conducted with these interfaces to examine how they may support creative learning and engagement with creative technologies. Lastly, I propose projects I plan to research and develop along these two domains to complete the dissertation, including a tangible puppet interface for animating drawn characters, and a hybrid CV-electronics physical computing toolkit.</p>
            </div>

            <Foot />

        </div>
    )
}

function Foot() {
  return (
    <div className="App-footer">
        <hr></hr>
        <div className="Contact">
          <div className="Contact-left">
          krithik.ranjan@gmail.com
          </div>
          <div className="Contact-right">
          <a href={CV}>CV</a>&ensp;&#9671;&ensp;<a href="https://scholar.google.com/citations?user=bJ26JeEAAAAJ&hl=en">SCHOLAR</a>&ensp;&#9671;&ensp;<a href="https://www.linkedin.com/in/krithik-ranjan/">LINKEDIN</a>
          </div>
        </div>
      </div>
  );
}