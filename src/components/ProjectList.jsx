const ProjectList = ({projects}) => { return (
  <div className="block object-fit">
      {projects.map((element,index) => 
        <div className="image" key={index}>
            <img src={element.img} key={index}></img>
        </div>
      )}
  </div>
)
}

export default ProjectList