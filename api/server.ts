import express, { request, response} from "express";
import cors from "cors";
import {initDB,  getTitles, getArticleById} from './src/db/db';
// Initialize the database
initDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get('/', (request, response) => {
    response.send('Welcome to the Articles API');
});

app.get('/articles', async (request, response) => {
    const titles = await getTitles();
    response.json(titles);
});

app.get('/article/:id', async (request, response) => {
    const articleId = parseInt(request.params.id, 10);
    const article = await getArticleById(articleId);
    if (article) {
        response.json(article);
    } else {
        response.status(404).send('Article not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});