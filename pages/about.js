import React from 'react';
import Head from "next/head";

function About(props) {
    return (
        <>
            <Head>
                <title>about - NEXT.js app - Milan TH</title>
            </Head>
            <h1 className="text-4xl mb-4">Thanks for visiting my portfolio</h1>
            <div>
                <p>
                    Special thanks for Tangled Hub company for believing in me and giving me an oppurtunity to work with them
                </p>
                <p>
                    Loved computers and technology since I was a kid.
                    Now a successful photographer with more than 10 years of professional experience seeking for a career change to a web developer.
                    Started with basics as HTML, CSS, through PHP, JavaScript, React.js basics and going further to become a successful full stack web developer.
                </p>
                <p>
                    Photographed and edited various types of photography including product, interior/real-estate, portrait, lifestyle, beauty, fashion and make-up, event, wedding, microstock, etc.
                    An expert in using Adobe Photoshop and Adobe Lightroom.
                </p>
            </div>

        </>
    );
}

export default About;