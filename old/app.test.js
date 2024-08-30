const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('../app/app')

chai.use(chaiHttp);

describe('New API', () => {
    it('Should return a welcome message on the root route', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal(`Welcome Rafael to my Search New API http://localhost:8080/v1/news`);
                done();
            });
    });

    it('Should return an array of news articles on /v1/news', (done) => {
        chai.request(app)
            .get('/v1/news')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });
});

