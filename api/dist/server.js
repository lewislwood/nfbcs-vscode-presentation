"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./src/db/db");
// Initialize the database
(0, db_1.initDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.get('/', (request, response) => {
    response.send('Welcome to the Articles API');
});
app.get('/articles', async (request, response) => {
    const titles = await (0, db_1.getTitles)();
    response.json(titles);
});
app.get('/article/:id', async (request, response) => {
    const articleId = parseInt(request.params.id, 10);
    const article = await (0, db_1.getArticleById)(articleId);
    if (article) {
        response.json(article);
    }
    else {
        response.status(404).send('Article not found');
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map