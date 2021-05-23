const range = document.querySelector('#input-range');
const divEmoji = document.querySelector('.formulario__div-emoji');
const nota = document.querySelector('.formulario__nota');
const emojis = ['👎','😤','🤢','😡','😠','😩','☹️','😑','😐','🙂','😄'];

range.addEventListener('input', modifica);

function modifica(e){
  let rangeValue = e.target.value;
  divEmoji.textContent = emojis[rangeValue];
  nota.textContent = rangeValue;
};