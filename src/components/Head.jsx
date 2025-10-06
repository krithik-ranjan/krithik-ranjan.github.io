import logo from '../assets/logo.svg';

export default function Head({title}) {
  return (
    <div className="App-header">
      <a href="/"><img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1></a>
    </div>
  );
}
