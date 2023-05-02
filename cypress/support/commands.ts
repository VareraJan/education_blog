import * as articleCommand from './commands/article';
import * as commentsCommand from './commands/comments';
import * as commonCommand from './commands/common';
import * as profileCommand from './commands/profile';
import * as ratingCommand from './commands/rating';

Cypress.Commands.addAll(commonCommand);
Cypress.Commands.addAll(profileCommand);
Cypress.Commands.addAll(articleCommand);
Cypress.Commands.addAll(commentsCommand);
Cypress.Commands.addAll(ratingCommand);
// Пример использования фикстур
// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//     const fixtureName = req.METHOD + req.url + hash(req.body);

//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName);
//     }
//     if (FIXTURE_MODE === 'WRITE') {
//         createFixture(fixtureName, req.body);
//     }
//     if (FIXTURE_MODE === 'API') {}
// });

export {};
