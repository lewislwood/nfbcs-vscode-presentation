"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const articles_1 = require("./src/articles/articles");
const db_1 = require("./src/db/db");
const logArticles = async () => {
    // Use in memory articles from articles.ts
    // Then output themfor review;
    const articles = await (0, articles_1.initArticles)();
    articles.forEach((a) => {
        console.log(`\n MarkDown:  ${a.markdown}\n HTML: ${a.html}\n`);
    });
    // Allows test default articles markdown to html
    logArticles();
}; // logArticles
// Uncomment the db routines to use the api or test sql
//
(0, db_1.initDB)();
const testDB = async () => {
    // Test getting titles
    const titles = await (0, db_1.getTitles)();
    const ts = titles.map(t => `( ${t.id}) ${t.title}`).join('\n');
    console.log(`\n Article Titles: \n ${ts} \n\n`);
    if (titles.length > 0) {
        // Test getting an article by id
        const article = await (0, db_1.getArticleById)(titles[0].id);
        console.log('\n Article by ID:', article);
    }
}; // testDB
// I set a timer for safety just in case db init takes longer.
// I found  1/2 second was sufficient. For testing.
//  Production initDb() should utilize Promise for completion before continuing.
setTimeout(() => {
    testDB();
}, 500);
