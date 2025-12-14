import { useState } from "react";
import Titles from "./Titles";
import Article from "./Article";


function ArticleViewer() {
const [articleId, setArticleId] = useState(0);

return(
    <>
        <Titles onchange={setArticleId} />
        <br/>
<Article id={articleId} />
    </>
)
}; // ArticleViewer 
export default ArticleViewer;