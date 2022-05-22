import { When, Then } from '@badeball/cypress-cucumber-preprocessor/lib/methods';
import { method } from 'cypress/types/bluebird';
import { data } from 'cypress/types/jquery';
const url = 'http://localhost:5001'

When('I send a GET request and verify it', () => {
    cy.request({url: '/api/movies'}).then((res) => {
        expect(res.status).to.equal(200);
        res.body.ok === true;
        console.log(res.body);
    });
    })

When('I send a POST request with invalid data and verify it', () => {
    cy.request({
        failOnStatusCode: false,
        method: 'POST',
        url: 'http://localhost:5001/api/movie',
        body: {
            "name":"rrrrr",
            "rating":"ggggggggggg",
            "time":["666666"]
       }
    }).then((Response) => {
        expect(Response.body).has.property("message", "Movie not created!");
        expect(Response.status).to.equal(400);
        
    })
});
When('I send a POST request with valid data and verify it', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:5001/api/movie',
        body: {
            "name":"Valid_test",
            "rating":"7",
            "time":["13:00"]
       }
    }).then((Response) => {
        expect(Response.body).has.property("message", "Movie created!");
        expect(Response.status).to.equal(208);
        
    });

   
})