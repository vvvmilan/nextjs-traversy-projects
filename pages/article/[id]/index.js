import {useRouter} from "next/router";

function Index({ articles }) {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <h1>{articles.title}</h1>
            <p>{articles.body}</p>
            This is an article {id}
        </div>
    );
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const articles = await res.json()

    return {
        props: {articles}
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id) // pravi novi niz id-eva artikala
    const paths = ids.map(id => ({params: {id: id.toString()} })) // pravi paths za getStaticPaths od id-eva artikala

    return {
        paths,
        fallback: false // ako ne postoji taj path-id, vratice err404
    }
}

export default Index;