
export const fetchArticle= async (articleId: number): Promise<Article> => {
    return new Promise<Article>((resolve, reject) => {
        fetch(`http://localhost:3000/article/${articleId}`)
            .then((res) => {
                // console.log("Fetcheched the following: ", res);
                resolve(res.json());
            })
            .catch((err) => {
                reject(err);
            });
    }); // Promise
}; // fetchTitles

