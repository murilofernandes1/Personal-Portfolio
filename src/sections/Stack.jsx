import '../css/Stack.css';
import typescriptIcon from '../assets/typescript.svg';
import javascriptIcon from '../assets/javascript.svg';
import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import csharpIcon from '../assets/csharp.svg';
import reactIcon from '../assets/react.svg';


const Technologies = () => {
  return (
    <section id="tech">

    <div className='container'>

      <h2 className="header">My Stack</h2>
      <div className='icon-tech'>

      <img className='icon'
        src={csharpIcon}
        alt="Csharp"
        style={{ width: '60px', height: '60px'}} 
        />

      <img className='icon'
        src={typescriptIcon}
        alt="Typescript"
        style={{ width: '50px', height: '50px'}} 
        />

      <img className='icon'
        src={javascriptIcon}
        alt="Javascript"
        style={{ width: '50px', height: '50px'}} 
        />

      <img className='icon'
        src={htmlIcon}
        alt="Html"
        style={{ width: '60px', height: '60px'}} 
        />

      <img className='icon'
        src={cssIcon}
        alt="Css"
        style={{ width: '60px', height: '60px'}} 
        />

      <img className='icon'
        src={reactIcon}
        alt="React"
        style={{ width: '60px', height: '60px'}} 
        />


    </div>
  </div>
    </section>
  );
};

export default Technologies;