import {useState, useEffect} from 'react';

import { fetchArticle} from "./fetch_article";

const loadingArticle :Article  = { id: 0, title: "Article Not Loaded..", markdown: "*** Loading Markdown ....", html: "<p>... Loading ...</p>" };

const createMarkup = (htmlString:string) => {
    return { __html: htmlString };
};

function Article({id = 0}) {
    const [article, setArticle] = useState(loadingArticle);
    const [showHTML, setShowHTML] = useState(true);

    useEffect(() => {
   if (id < 1) {
        setArticle(loadingArticle);
    } else {
        try {
            fetchArticle(id)
            .then(data=> {
                setArticle(data);
            })
        } catch(error: any) {
            console.log("Fetch error: ", error);
            setArticle({ id: 0, title: "Error loading article", markdown: "*** Error loading article ***", html: "<p>Error loading article</p>" });
        }; // try 
    }; // if id < 1
    }, [id]);

return (
    <>
        <MDHTML setShowHTML={setShowHTML} modeHTML={showHTML} />
    { (!showHTML) ?
        (<ShowMarkDown article={article} />
        ):(
            <ShowHTML article={article} />
    )
}
    </>
)
}; // Article

// @ts-ignore
function ShowMarkDown({article}) {
return (
    <div>{article.markdown}</div>
)

}; // ShowMarkDown

// @ts-ignore
function ShowHTML({article}) {
return (
    <div dangerouslySetInnerHTML={createMarkup(article.html!)} ></div>
)
}; // ShowHTML

//@ts-ignore
function MDHTML({setShowHTML, modeHTML}) {
return (
    <div>
        <label htmlFor="html-rd">Display article:</label>
        <input type="radio" 
        id="html-rd" 
        name="mdhtml" 
        onChange={(e) => setShowHTML(e.target.checked)} 
        checked={modeHTML}
        />
        <label htmlFor="md-rd">Display MarkDown:</label>
        <input type="radio"
            id="md-rd"
            name="mdhtml"
            onChange={(e) => setShowHTML(! e.target.checked)}
            checked={! modeHTML}
        />
    </div>

)
}; // MDHTML
export default Article;