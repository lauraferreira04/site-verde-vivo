// Accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    if(panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Dicas aleatórias
const dicas = [
  "Use sacolas reutilizáveis ao fazer compras.",
  "Plante uma árvore ou ervas em casa.",
  "Reduza o consumo de plásticos descartáveis.",
  "Prefira produtos locais e sazonais.",
  "Desligue aparelhos eletrônicos quando não estiver usando."
];

const btn = document.getElementById('gerarDica');
const display = document.getElementById('dicaAleatoria');

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * dicas.length);
  display.textContent = dicas[randomIndex];
});
