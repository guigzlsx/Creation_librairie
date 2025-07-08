describe('Animation du carré bleu', () => {
  it('doit animer le carré bleu au clic', () => {
    cy.visit('http://localhost:5173');
    cy.get('#box').should('be.visible');
    cy.get('#box').click();
    cy.get('#box')
      .should('have.css', 'transform')
      .and('not.eq', 'none');
  });
});