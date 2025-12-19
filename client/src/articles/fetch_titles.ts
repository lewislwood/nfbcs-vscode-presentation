import { articleSURL } from "./articlesURL";

export const fetchTitles = async (): Promise<Title[]> => {
    return new Promise<Title[]>((resolve, reject) => {
    fetch(`${articleSURL}/articles`)
        .then((res) => {
            // console.log("Fetcheched the following: ", res);
             resolve(res.json());
            })
        .catch((err) => {
            reject(err);
        });
    }); // Promise
}; // fetchTitles
