/// <reference types="cypress"/>


describe('User Tests', () => {

    var url = "https://petstore.swagger.io";

    it('POST /v2/user', () => {

        const payload = {
            "id": 101010,
            "username": "ayseabd",
            "firstName": "ayse",
            "lastName": "abd",
            "email": "ayse@gmail.com",
            "password": "12345",
            "phone": "2121212",
            "userStatus": 0
        }

        const headers_payload = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

        }

        cy.request({
            method: 'POST',
            url: url + '/v2/user',
            body: payload,
            headers: headers_payload
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('GET /v2/{username} GetUserInfo', () => {

        const headers_payload = {
            'Content-Type': 'application/json',
        }

        cy.request('GET', url + '/v2/user/ayseabd').then((response) => {
            expect(response.status).to.eq(200)
        })

    })


    it('GET /v2/Login', () => {

        const qsParams = {
            username: 'ayseabd',
            password: '12345'
        }
        cy.request('GET', url + `/v2/user/login`, {
            query: qsParams
        })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
    })

    it('GET /v2/user/Logout ', () => {

        cy.request('GET', url + '/v2/user/logout').then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    
    it('PUT /v2/user/{username} Update User', () => {

        var username="ayseabd";

        const payload = {
            "id": 101010,
            "username": "ayseabd",
            "firstName": "ayse",
            "lastName": "abd",
            "email": "ayseabd@gmail.com",
            "password": "12345",
            "phone": "2121212",
            "userStatus": 0
        }

        const headers_payload = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'

        }

        cy.request({
            method: 'PUT',
            url: url + '/v2/user/' + username,
            body: payload,
            headers: headers_payload
        }).then((response) => {
            expect(response.status).to.eq(200)
        })

    })

    it('DELETE /v2/user/{username} ', () => {

        var username = "ayseabd";

        cy.request('GET', url + '/v2/user/'+username).then((response) => {
            expect(response.status).to.eq(200)
        })

    })


})
