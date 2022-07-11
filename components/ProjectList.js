import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem";
import {fetchAllProjects} from "../data/projects";

function projectList({ articles }) {
    fetchAllProjects();

    return (
        <div className={articleStyles.grid}>
            {articles.map(article =>
                <ArticleItem article={article}/>
            )}
        </div>
    );
}

export default projectList;