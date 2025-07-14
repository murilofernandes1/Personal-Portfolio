import '../css/Contact.css'
import githubIcon from '../assets/github.svg';
import emailIcon from '../assets/email.svg';
import linkedinIcon from '../assets/linkedin..svg';

const Contact = () => {
  return (
    <section id="contact">

      <div className='container'>
      <h2 className="header">Contact</h2>
      <p>You can find me on my social medias below.</p>

      <div className='contact-icons'>
      <a className='icon' href="https://github.com/murilofernandes1" target="_blank" rel="noopener noreferrer">
        <img
        src={githubIcon}
        alt="GitHub"
        style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
        />
      </a>

      <a className='icon' href="https://www.linkedin.com/in/murilofernandesdev/" target="_blank" rel="noopener noreferrer">
        <img
        src={linkedinIcon}
        alt="Linkedin"
        style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
        />
      </a>

      <a className='icon' href="mailto:murilofernandesvaz4@gmail.com" target="_blank" rel="noopener noreferrer">
        <img
        src={emailIcon}
        alt="Email"
        style={{ width: '50px', height: '50px', cursor: 'pointer' }} 
        />
      </a>
      </div>
    </div>
    </section>
  )
}
export default Contact