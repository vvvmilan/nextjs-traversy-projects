import React from 'react';
import { MOCK_PROJECTS, fetchAllProjects } from "../../data/projects";
import ProjectItem from "../../components/ProjectItem";
import ProjectList from "../../components/ProjectList"

function projectsPage() {
    const projects = fetchAllProjects();
    console.log(projects);

    return (
        <>
            <ProjectList projects={projects}/>
        </>
    );
}

export default projectsPage;