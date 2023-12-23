//main.js
import './style.css'
import palettes from './palettes.json'
import { addPaletteToStorage } from './localStorage.js';

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const paletteTitle = form.querySelector('#paletteTitle').value;
  const color1 = form.querySelector('#color1').value;
  const color2 = form.querySelector('#color2').value;
  const color3 = form.querySelector('#color3').value;
  const temperature = document.querySelector('input[name="temperature"]').value;

  const palette = {
    title: paletteTitle,
    colors: [color1, color2, color3],
    temperature: temperature
  };

  addPaletteToStorage(palette);
};

console.log(palettes);


const main = () => {
  document.querySelector('#palette-form').addEventListener('submit', handleSubmit);
};

main();