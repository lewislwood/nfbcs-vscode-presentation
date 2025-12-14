"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleById = exports.getTitles = exports.initDB = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const articles_1 = require("../articles/articles");
const sql3 = sqlite3_1.default.verbose();
let db = new sql3.Database(":memory:");
function connected(err) {
    if (err) {
        console.error("Error connecting to in-memory SQlite database:", err.message);
    }
}
const initDB = async () => {
    const articles = await (0, articles_1.initArticles)();
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
        articles.forEach(a => {
            ins.run(a.title, a.markdown, a.html, (err, rows) => {
                if (err) {
                    console.log('error inserting article:', err.message);
                    throw err;
                }
                // console.log(`Inserted article titled: ${a.title}`);
            });
        });
    });
}; // initDB
exports.initDB = initDB;
const getTitles = async () => {
    return new Promise((resolve, reject) => {
        const titles = [];
        const sql = `select id, title from article`;
        const newTitle = (id, title) => {
            const t = { id, title };
            // console.log(`Adding new title id: ${id} title: ${title}`);
            titles.push(t);
        };
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.log('error querying titles:', err.message);
                reject(err);
            }
            ;
            rows.forEach((row) => {
                newTitle(Number(row.id), row.title);
                // console.log(`${titles.length}  Fetched title: ${row.title}` );
            });
            resolve(titles);
        }); // db.all
    }); // new Promise
}; // getTitles
exports.getTitles = getTitles;
const getArticleById = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = `select id, title, markdown, html from article where id = ?`;
        db.get(sql, [id], (err, row) => {
            if (err) {
                console.log('error querying article by id:', err.message);
                reject(err);
                return;
            }
            if (row) {
                const article = {
                    id: row.id,
                    title: row.title,
                    markdown: row.markdown,
                    html: row.html
                };
                resolve(article);
            }
            else {
                resolve(null); // No article found with the given id
            }
        });
    });
}; // getArticleById
exports.getArticleById = getArticleById;
