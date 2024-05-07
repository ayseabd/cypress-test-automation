class mainPage{

    goToUrl(text){
        cy.visit(text);
        return this;
    }

    errorMessage(text){
        cy.get("[class='error']").should("have.text", text);
    }

}

export default mainPage;