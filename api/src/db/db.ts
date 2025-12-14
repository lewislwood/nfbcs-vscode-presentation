import sqlite3 from 'sqlite3';
import { initArticles, type Article} from '../articles/articles';


const sql3 = sqlite3.verbose();
let db = new sql3.Database(":memory:");

function connected(err: any) {
    if (err) {
        console.error("Error connecting to in-memory SQlite database:", err.message);
    }

}




    export const initDB = async () => {
        const articles = await initArticles();


        const sqlCreate = `create table if not exists article (
id          integer     primary key autoincrement,
title       text        not null,
markdown    text        not null,
html        text        not null);`;

        await db.run(sqlCreate, [], (err) => {
            //callback function
            if (err) {
                console.log('error creating article table:', err.message);
                throw err;
                return;
            }
            // console.log('CREATED TABLE');

                    const ins = db.prepare(`insert into article 
                ( title, markdown, html) 
                 values (?,?,?)            `);

            articles.forEach( a => {
            ins.run(a.title,a.markdown,a.html!, (err:any,rows:any) => { 
                if (err) {
                    console.log('error inserting article:', err.message);
                    throw err;
                }
                // console.log(`Inserted article titled: ${a.title}`);
            });
            });

        });

}; // initDB

export const getTitles =  async ():Promise<{id:number;title: string;}[]>  => {
return new Promise<{id:number;title: string;}[]>((resolve, reject) => {
    const titles: { id: number; title: string; }[] = [];

const sql = `select id, title from article`;
const newTitle = (id: number, title: string) => {
    const t = {  id, title };
    // console.log(`Adding new title id: ${id} title: ${title}`);
    titles.push(t);
};
        db.all(sql, [], (err:any, rows:any) => {
            if (err) {
                console.log('error querying titles:', err.message);
                reject(err);
            };
rows.forEach((row:any) => {
    newTitle (Number(row.id), row.title);
    // console.log(`${titles.length}  Fetched title: ${row.title}` );
});
resolve(titles);
        }); // db.all
    }); // new Promise
}; // getTitles

export const getArticleById = async (id:number):Promise<Article | null> => {
    return new Promise((resolve, reject) => {
        const sql = `select id, title, markdown, html from article where id = ?`;
        db.get(sql, [id], (err:any, row:any) => {
            if (err) {
                console.log('error querying article by id:', err.message);
                reject(err);
                return;
            }
            if (row) {
                const article:Article = {
                    id: row.id,
                    title: row.title,
                    markdown: row.markdown,
                    html: row.html
                };
                resolve(article);
            } else {
                resolve(null); // No article found with the given id
            }
        });
    });
}   ; // getArticleById