import OuterProjectCard from './index.styled'
const ProjectCard = ({projectName, repo, website, img}) => {
  return (
    <OuterProjectCard>
      <h2>{projectName}</h2>
      <img src={img} alt={projectName + "'s frontpage"} />
      <div className='buttons'>
      <a href={repo}><button>Repo</button></a>
      <a href={website}><button>website</button></a>
      </div>
    </OuterProjectCard>
  )
}

export default ProjectCard