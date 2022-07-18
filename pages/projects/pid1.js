import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from '@mui/icons-material/Language';

export default function pid1() {
    return (
        <>
            <Card sx={{ maxWidth: 1024 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://milan-expo-chat-app.netlify.app/" target="_blank">
                        <Button variant="contained" endIcon={<LanguageIcon />}>
                            visit app online
                        </Button>
                    </a>


                </CardActions>
            </Card>
        </>


    );
}