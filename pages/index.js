import styles from '../styles/Layout.module.css'
import Head from "next/head";
import ArticleList from "../components/ArticleList";
import ProjectList from "../components/ProjectList";   // u nju se upisuju metadata za sajt
import {fetchAllProjects} from "../data/projects";
import Link from "next/link";


export default function Home({ /*projects*/ }) {



  return (
    <div className={styles.container}>
        <Head>
            <title>NEXT.js app - Milan TH</title>
        </Head>
      <h1>Got my first job at Tangled Hub!</h1>
      <h2><a href="https://tangledgroup.com/tangledhub">Kudos for believing and giving me a chance!</a></h2>
      <Link href="/projects">
          Check out some of my projects!
      </Link>

        <a href="#"
           className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
{/*            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                 src="/docs/images/blog/image-4.jpg" alt="">*/}
            <img src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""
                 className="object-cover m-4 w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                        technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
        </a>


        {/*<div*/}
        {/*    className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">*/}
        {/*    <a href="#">*/}
        {/*        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />*/}
        {/*    </a>*/}
        {/*    <div className="p-5">*/}
        {/*        <a href="#">*/}
        {/*            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy*/}
        {/*                technology acquisitions 2021</h5>*/}
        {/*        </a>*/}
        {/*        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise*/}
        {/*            technology acquisitions of 2021 so far, in reverse chronological order.</p>*/}
        {/*        <a href="#"*/}
        {/*           className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
        {/*            Read more*/}
        {/*            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"*/}
        {/*                 xmlns="http://www.w3.org/2000/svg">*/}
        {/*                <path fill-rule="evenodd"*/}
        {/*                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
        {/*                      clip-rule="evenodd"></path>*/}
        {/*            </svg>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*</div>*/}


        {/*<ArticleList articles={articles} />*/}
        {/*<ProjectList projects={projects} />*/}
    </div>
  )
}

/*
export const getStaticProps = () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    // const articles = await res.json();

    // const projects =  fetchAllProjects();

    return {
        props: {
            projects
        }
    }
}*/
