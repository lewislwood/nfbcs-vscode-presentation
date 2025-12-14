

type Article = {
    id: number;
    title: string;
    markdown: string;
    html?: string;
}

type Title= pick<Article, 'id' | 'title'>;

