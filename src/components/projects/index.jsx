import ProjectCard from './projectcards'
import { OuterProject } from './index.styles'
const Projects = () => {
  return (
    <OuterProject>
        <div className="blurLayer">
        </div>
        <div className='projects'>
      <ProjectCard projectName="JoinIn" repo="https://github.com/puggen1/JoinInV2/tree/main" website="https://joininv2-stablebuild.netlify.app/feed.html" img="/joininImg.jpg"/>
      <ProjectCard projectName="Bidder" img="/bidderImg.jpg" website="https://puggen1.github.io/Semester-Project/" repo="https://github.com/puggen1/Semester-Project/tree/main" />
      <ProjectCard projectName="Shop'n Go" img="/shopngoImg.jpg" website="https://shopngo.netlify.app/" repo="https://github.com/puggen1/js-frameworks-ca-bendik" />
      </div>
    </OuterProject>
  )
}

export default Projects