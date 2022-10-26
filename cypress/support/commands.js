
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Wellington')
    cy.get('#lastName').type('Lemos')
    cy.get('#email').type('wellingtonlemos@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})