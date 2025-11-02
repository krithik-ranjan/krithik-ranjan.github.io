import red from '../assets/shape-red.svg'
import green from '../assets/shape-green.svg'
import yellow from '../assets/shape-yellow.svg'

export default function Nav({active = "None"}) {
  return (
    <div className="Nav-menu">
      <div className={`Nav-item ${active === 'Projects' ? 'Nav-selected' : ''}`}>
        <a className='A-Red' href="/pages/projects.html">PROJECTS</a>
        <img src={red} />
      </div>
      <div className={`Nav-item ${active === 'Publications' ? 'Nav-selected' : ''}`}>
        <a className='A-Green' href="/pages/publications.html">PUBLICATIONS</a>
        <img src={green} />
      </div>
      <div className={`Nav-item ${active === 'Photos' ? 'Nav-selected' : ''}`}>
        <a className='A-Yellow' href="/pages/photos.html">PHOTOS</a>
        <img src={yellow} />
      </div>
    </div>
  )
}