import '../css/Header.css'
function Header() {
  return (
    

    <div className="container">
      <h1>Murilo Fernandes Vaz</h1>
      <h2>Front-End Developer</h2>

      <div className="sections">
        <nav>
                <a className='section' href="#tech">Technologies</a>
                <a className='section' href="#projects">Projects</a>
                <a className='section' href="#contact">Contact</a>
                <a className='section' href="#about">About Me</a>
        </nav>
      </div>

    </div>
  );
}

export default Header;
