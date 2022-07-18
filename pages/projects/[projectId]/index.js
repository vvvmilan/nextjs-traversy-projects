import React from 'react';
import {useRouter} from "next/router";
import { MOCK_PROJECTS, fetchAllProjects } from "../../../data/projects";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";

function Index({ projects }) {
    const router = useRouter()
    const {projectId} = router.query

    return (
        <>
            <Card sx={{ maxWidth: 1024 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={projects[projectId - 1].img}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {projects[projectId - 1].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {projects[projectId - 1].description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={projects[projectId - 1].onlineUrl} target="_blank">
                        <Button
                            variant="contained"
                            style={{borderRadius: '30px'}}
                            endIcon={<LanguageIcon />}
                        >
                            visit app online
                        </Button>
                    </a>


                </CardActions>
            </Card>
        </>

/*        <div>
            {projects[projectId - 1].title}
            <div>
                {projects[projectId - 1].description}
            </div>
        </div>*/
    );
}

export const getStaticProps = (context) => {
    const projects = fetchAllProjects();

    return {
        props: {projects}
    }
}

export const getStaticPaths = () => {
    const projects = fetchAllProjects();

    const ids = projects.map(project => project.projectId) // pravi novi niz id-eva artikala
    const paths = ids.map(id => ({params: {projectId: id.toString()} })) // pravi paths za getStaticPaths od id-eva artikala

    return {
        paths,
        fallback: false // ako ne postoji taj path-id, vratice err404
    }
}


export default Index;