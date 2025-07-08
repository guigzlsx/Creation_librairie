import './style.css'
import { animate, animateRotate } from './animation'

const app = document.getElementById('app');
if (app) {
  app.innerHTML = '';
  app.style.maxWidth = 'none';
  app.style.padding = '0';
}
document.body.style.background = 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)';
document.body.style.minHeight = '100vh';
document.body.style.margin = '0';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

const title = document.createElement('h1');
title.textContent = 'Démo Animation du Carré';
title.style.fontFamily = 'Avenir, Helvetica, Arial, sans-serif';
title.style.fontWeight = '700';
title.style.fontSize = '2.5rem';
title.style.color = '#222';
title.style.marginBottom = '2rem';
document.body.appendChild(title);

const box = document.createElement('div');
box.id = 'box';
box.style.position = 'fixed';
box.style.left = '0px';
box.style.top = '50%';
box.style.transform = 'translateY(-50%)';
box.style.width = '60px';
box.style.height = '60px';
box.style.background = 'linear-gradient(135deg, #3498db 60%, #6dd5fa 100%)';
box.style.borderRadius = '16px';
box.style.boxShadow = '0 8px 32px #0002';
box.style.transition = 'box-shadow 0.3s';
box.style.display = 'flex';
box.style.alignItems = 'center';
box.style.justifyContent = 'center';
document.body.appendChild(box);

const boxWidth = 60;
function getMaxLeft() {
  return window.innerWidth - boxWidth;
}

async function loop() {
  while (true) {
    // Aller : translation + rotation + couleur
    box.style.transition = 'background 0.5s';
    box.style.background = 'linear-gradient(135deg, #e67e22 60%, #f6d365 100%)';
    box.style.transform = 'translateY(-50%) rotate(0deg)';
    await animate(box, 'left', 0, getMaxLeft(), 1000, t => t);
    box.style.transition = 'background 0.5s';
    box.style.background = 'linear-gradient(135deg, #3498db 60%, #6dd5fa 100%)';
    box.style.transform = 'translateY(-50%) rotate(360deg)';
    await animate(box, 'left', getMaxLeft(), 0, 1000, t => t);
    box.style.transform = 'translateY(-50%) rotate(0deg)';
    await animateRotate(box, 360, 800); // Fait tourner le carré sur lui-même après chaque aller-retour
  }
}
loop();

const legend = document.createElement('p');
legend.textContent = 'Le carré bleu fait des allers-retours horizontaux sur toute la largeur de la fenêtre.';
legend.style.fontFamily = 'Avenir, Helvetica, Arial, sans-serif';
legend.style.fontSize = '1.1rem';
legend.style.color = '#555';
legend.style.marginTop = '2rem';
document.body.appendChild(legend);
