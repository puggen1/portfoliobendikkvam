import {OuterContact} from './index.styles'
const Contact = () => {
  return (
    <OuterContact>
        <h2>Contact</h2>
            <div className='contactInfo'>
            <a href='mailto:bendik.kvam.work@gmail.com'>
            <img src='/mailLogo.webp' alt='the mail logo'/>
            <p>Mail</p>
            </a>
             <a href='https://www.linkedin.com/in/bendik-kvam/'>
             <img src='/linkedInLogo.png' alt='the linked in logo'/>
             <p>LinkedIn</p>
            </a>
            <a href='https://github.com/puggen1'>
            <img src='/githubLogo.png' alt='the github logo'/>
            <p>Github</p>
            </a>
            </div>
    </OuterContact>
  )
}

export default Contact