import styles from '../styles/Layout.module.css'
import Head from "next/head";
import ArticleList from "../components/ArticleList";   // u nju se upisuju metadata za sajt


export default function Home({ articles }) {



  return (
    <div className={styles.container}>
        <Head>
            <title>NEXT.js app - Milan TH</title>
        </Head>
      <h1>Welcome to Tangled Hub</h1>
        <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}