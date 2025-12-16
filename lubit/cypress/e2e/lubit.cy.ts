import { credentials } from "../fixtures/credentials.js";

describe('Alertas', () => {
    //login
    beforeEach(() => {
        cy.visitAndLogin(`${credentials.url}`, `${credentials.email}`, `${credentials.password}`)
    })

    it('aumenta a quantidade de dias dos lembretes de "Alert"', () => {
        cy.get('mat-toolbar').contains('menu').click()
        cy.get('#mat-expansion-panel-header-8').click()
        cy.get('#cdk-accordion-child-8 > div > mat-nav-list').contains('Configuração').click()

        cy.get('#period-field-1').invoke('val').then(
            function check(value) {
                const currentValue = Number(value)

                if (currentValue < 21) {
                    cy.contains('arrow_drop_up')
                    .parent()
                    .children()
                    .first()
                    .click()

                    cy.get('#period-field-1').invoke('val').then(check)
                }
            }
        )
        cy.get('#save-button').click()
        cy.get('#modal-confirm-button').click()
    });
});