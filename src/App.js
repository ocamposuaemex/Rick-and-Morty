/*import logo from './logo.svg';*/
import imagen1 from "../src/img/img.png";
import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={imagen1} alt="Rick and Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
