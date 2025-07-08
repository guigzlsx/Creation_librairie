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

describe('Animation de rotation du carré', () => {
  it('doit faire tourner le carré sur lui-même après un aller-retour', () => {
    cy.visit('http://localhost:5173');
    cy.get('#box').should('be.visible');
    // On attend la fin d'un aller-retour + rotation (~2.8s)
    cy.wait(2800);
    cy.get('#box')
      .should('have.css', 'transform')
      .and('not.eq', 'none');
    // Optionnel : vérifier que la rotation est revenue à 0deg (matrice d'identité)
    cy.get('#box').invoke('css', 'transform').then(transform => {
      expect(transform === 'none' || transform.match(/^matrix\\(1, 0, 0, 1, [\\d.-]+, [\\d.-]+\\)$/)).to.be.true;
    });
  });
});