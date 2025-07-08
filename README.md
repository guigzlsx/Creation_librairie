# Creation_librairie

Démo d’animation d’un carré bleu avec tests end-to-end Cypress.

## 🚀 Présentation

Ce projet propose une animation d’un carré bleu se déplaçant horizontalement sur la page.  
Il est développé en TypeScript avec Vite, et inclut des tests end-to-end automatisés avec Cypress.

## 📦 Installation

Clone le dépôt :

```bash
git clone https://github.com/guigzlsx/Creation_librairie.git
cd Creation_librairie
```

Installe les dépendances :

```bash
npm install
```

## 🖥️ Lancement du projet

Démarre le serveur de développement :

```bash
npm run dev
```

Le site sera accessible par défaut sur [http://localhost:5173](http://localhost:5173).

## 🧪 Tests end-to-end (Cypress)

### Lancer les tests

1. Démarre le serveur de développement dans un terminal :

   ```bash
   npm run dev
   ```

2. Dans un autre terminal, lance Cypress :

   ```bash
   npm run test:e2e
   ```

   ou

   ```bash
   npx cypress open
   ```

3. Clique sur le fichier `animation.cy.js` pour exécuter le test d’animation du carré bleu.

### Structure du test

Le test vérifie :

- La présence du carré bleu (`#box`)
- Le déclenchement de l’animation au clic
- Le changement de style CSS (`transform`) après l’animation

## 🗂️ Structure du projet

```
Creation_librairie/
├── index.html
├── LICENSE.md
├── package-lock.json
├── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── counter.ts
│   ├── main.ts
│   ├── style.css
│   ├── typescript.svg
│   └── vite-env.d.ts
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── ci.yml
└── cypress/
    ├── e2e/
    ├── fixtures/
    ├── support/
    └── downloads/
```

## ✨ Technologies

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)

## 📄 Licence

Ce projet est open-source, sous licence MIT.
