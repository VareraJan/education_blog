import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'DataScience и BigData',
    img: 'https://248006.selcdn.ru/main/iblock/d86/d86c59bc9ca3b0a5736d02d862feed4a/1326672a1efd7cdaa3c113dcf0758fa1.jpg',
    views: 7643,
    createdAt: '11.07.2021',
    userId: '1',
    type: ['SCIENSE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'assf' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'assf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
