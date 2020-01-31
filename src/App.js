import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';


export default function App() {
  // setting up state for rickandmorty api, then get request
  const [characterData, setCharacterData] = useState([]);
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log('response here', res);
      setCharacterData(res.data.results);
    })
    .catch((err) => {
      console.log('hey, an error', err);
    })
  }, [])

  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route path='/characters' >
        <SearchForm />
        <CharacterList characterData={characterData} />
      </Route>
    </main>
  );
}
