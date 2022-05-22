import { Then} from '@badeball/cypress-cucumber-preprocessor';
const url = 'http://localhost:5001'

Then('I send a GET request', () => {
    cy.request({url: '/api/movies'}).then((res) => {
        expect(res.status).to.equal(200);
        res.body.ok === true;
        console.log(res.body);
    });
    })