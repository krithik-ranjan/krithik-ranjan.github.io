import CV from '../assets/CV_KrithikRanjan.pdf';

import red from '../assets/shape-red.svg'
import green from '../assets/shape-green.svg'
import yellow from '../assets/shape-yellow.svg'

export default function Foot() {
  return (
    <div className="App-footer">
        <hr></hr>
        <div className="Contact">
          <div className="Contact-left">
          krithik.ranjan@gmail.com
          </div>
          <div className="Contact-right">
          <a className='A-Red' href={CV}>CV</a><img src={red} /><a className='A-Green' href="https://scholar.google.com/citations?user=bJ26JeEAAAAJ&hl=en">SCHOLAR</a><img src={green} /><a className='A-Yellow'href="https://www.linkedin.com/in/krithik-ranjan/">LINKEDIN</a><img src={yellow} />
          </div>
        </div>
      </div>
  );
}
