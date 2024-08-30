const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const app = require('../app');
let server;

chai.use(chaiHttp);

describe('New API', () => {
    before((done) => {
        server = app.listen(8000, done);
    });
    after((done) => {
        server.close(done);
    });
    it('Should return a welcome message on the root route', (done) => {
        chai.request(server)
            .get('http://localhost:8000/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.equal(`Welcome Rafael to my Search New API http://localhost:8080/v1/news`);
                done();
            });
    });

    it('Should return an array of news articles on /v1/news', (done) => {
        chai.request(server)
            .get('http://localhost:8000/v1/news')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });
});

