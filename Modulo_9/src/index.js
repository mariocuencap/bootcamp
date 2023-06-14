import "./styles.css";

import { getCharacters, getCharacter } from "./data-business.js";
import { createCharacterRow, showCharacter } from "./utils.js";

const rootElement = document.getElementById("root");

const renderCharacterList = (characters) => {
  rootElement.innerHTML = "";
  characters.forEach((character) => {
    const characterRow = createCharacterRow(character);
    characterRow.addEventListener("click", () => {
      showCharacterDetails(character.id);
    });
    rootElement.appendChild(characterRow);
  });
};

const showCharacterDetails = (id) => {
  getCharacter(id)
    .then((character) => {
      if (character) {
        showCharacter(character);
      }
    });
};

const initializeApp = () => {
  getCharacters()
    .then((characters) => {
      renderCharacterList(characters);
    });
};

initializeApp();
