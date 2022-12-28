const supertest = require('supertest')
const app = require('../app')

describe('E2E', function () {
    it("retourne 200 sur l'endpoint API", async () => {
        await supertest(app)
            .get('/')
            .expect(200);
    })

    it("retourne 404 sur l'endpoint API /health", async () => {
        await supertest(app)
            .get('/health')
            .expect(200)
            .then(response => {
                expect(response.equipeId).toEqual('4BD37B9D-CCFC-459D-8AE7-9CDD0105176B')
            })
    })
});
