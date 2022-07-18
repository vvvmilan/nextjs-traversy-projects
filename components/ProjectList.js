import ProjectItem from "./ProjectItem";
import projectStyles from "../styles/Article.module.css"

function ProjectList({ projects }) {
    return (
            <div className={projectStyles.grid}>
                {projects.map(project => <ProjectItem project={project}/>)}
            </div>
    );
}

export default ProjectList;