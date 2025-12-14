
export const fetchTitles = async (): Promise<Title[]> => {
    return new Promise<Title[]>((resolve, reject) => {
    fetch('http://localhost:3000/articles')
        .then((res) => {
            // console.log("Fetcheched the following: ", res);
             resolve(res.json());
            })
        .catch((err) => {
            reject(err);
        });
    }); // Promise
}; // fetchTitles
