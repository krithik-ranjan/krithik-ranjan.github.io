import CV from '../assets/CV_KrithikRanjan.pdf';

export default function Foot() {
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
