import Link from "next/link";
import projectStyles from "../styles/Article.module.css"
import {Button} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProjectItem({ project }) {
    return (
            // <a className={projectStyles.card}>
            //     <div>
            //         <h3>{project.title}</h3>
            //     </div>
            //     <img width="250px" src={project.img} alt="chat-app-img"/>
            //     <p>{project.descriptionShort}</p>
            //     <>
            //         <Link href="/projects/[projectId]" as={`/projects/${project.projectId}`}>
            //
            //         <Button
            //             variant="contained"
            //             style={{borderRadius: '30px'}}
            //             endIcon={<ArrowForwardIcon />}
            //         >
            //             find out more
            //         </Button>
            //         </Link>
            //
            //     </>
            //
            // </a>

        <>
            <div
               className="flex flex-col m-2 items-center bg-gray-50 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
                <img src={project.img} alt="proj"
                     className="object-cover m-4 w-full rounded-t-lg md:m-4 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {project.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {project.description}
                    </p>
                            <Link href="/projects/[projectId]" as={`/projects/${project.projectId}`}>
                             <Button
                                 variant="outlined"
                                 style={{borderRadius: '30px'}}
                                 endIcon={<ArrowForwardIcon />}
                             >
                                 find out more
                             </Button>
                             </Link>
                </div>
            </div>
        </>

    );
}

export default ProjectItem;

