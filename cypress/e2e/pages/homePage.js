class homePage{

    textValidation(text){
        cy.get("[class='title']").should("have.text", text);
    }

}

export default homePage;