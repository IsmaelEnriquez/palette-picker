// localStorage.js

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getPalettes = () => getLocalStorageKey('palettes');
export const addPaletteToStorage = (palette) => {
  const palettes = getPalettes();
  setLocalStorageKey('palettes', [...palettes, palette]);
};