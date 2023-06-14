const BASE_URL = "https://rickandmortyapi.com/api";

const getCharacters = () => {
  return fetch(`${BASE_URL}/character`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error("Error fetching characters:", error);
      return [];
    });
};

const getCharacter = (id) => {
  return fetch(`${BASE_URL}/character/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching character:", error);
      return null;
    });
};

export { getCharacters, getCharacter };
