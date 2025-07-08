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

    // On attend la fin du déplacement (2s) puis on vérifie la rotation pendant l'animation (~0.8s)
    cy.wait(2100); // attendre la fin du déplacement
    cy.get('#box')
      .invoke('css', 'transform')
      .then(transform => {
        // On s'attend à ce que la rotation soit en cours (donc pas la matrice d'identité)
        expect(transform).to.not.satisfy(val =>
          val === 'none' ||
          val.match(/^matrix\(1, 0, 0, 1, [\d.-]+, [\d.-]+\)$/)
        );
      });

    // On attend la fin de la rotation
    cy.wait(900);
    cy.get('#box')
      .invoke('css', 'transform')
      .then(transform => {
        // La matrice doit être de la forme matrix(1, 0, 0, 1, x, y) où y est la translation verticale
        expect(transform).to.match(/^matrix\(1, 0, 0, 1, [\d.-]+, [\d.-]+\)$/);
      });
  });
});