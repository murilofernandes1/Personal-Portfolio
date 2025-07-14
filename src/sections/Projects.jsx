import '../css/Projects.css'
import javascriptIcon from '../assets/javascript.svg';
import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import reactIcon from '../assets/react.svg';

const Projects = () => {
    
  return (
    <section id="projects">

      <h2 className="header">Projects</h2>

    <div className='container'>

      <div className='projects-container'>
      <div className='project'>
        <h3 className='project-name'>Personal Portfolio</h3>
        <p className='project-description'>My personal portfolio (a.k.a this site lol). </p>

        <div className='proj-icons'>
        <img className='icon'
        src={javascriptIcon}
        alt="Javascript"
        style={{ width: '40px', height: '40px'}} 
        />

      <img className='icon'
        src={htmlIcon}
        alt="Html"
       style={{ width: '50px', height: '50px'}} 
        />

      <img className='icon'
        src={cssIcon}
        alt="Css"
        style={{ width: '50px', height: '50px'}} 
        />
      <img className='icon'
        src={reactIcon}
        alt="React"
        style={{ width: '50px', height: '50px'}} 
        />
      </div>
        <a className='repository' href="https://github.com/murilofernandes1/Portfolio" target="_blank" rel="noreferrer">Click here to see the repository</a>
      </div>

      <div className='project'>
        <h3 className='project-name'>Expresso Sagui</h3>
        <p className='project-description'>A fictional shipping company, with a pickup request system.</p>
         <div className='proj-icons'>
        <img className='icon'
        src={javascriptIcon}
        alt="Javascript"
        style={{ width: '40px', height: '40px'}} 
        />

      <img className='icon'
        src={htmlIcon}
        alt="Html"
       style={{ width: '50px', height: '50px'}} 
        />

      <img className='icon'
        src={cssIcon}
        alt="Css"
        style={{ width: '50px', height: '50px'}} 
        />
      </div>
        <a className='repository' href="https://github.com/murilofernandes1/Expresso-Sagui" target="_blank" rel="noreferrer">Click here to see the repository</a>
      </div>
    
   
    </div>
</div>
      
    </section>
  );
};

export default Projects;