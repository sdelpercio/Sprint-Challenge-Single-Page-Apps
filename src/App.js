import React, { useState, useEffect } from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #44281d,
  min-height:	100vh,
  width: 100%,
  display: flex;
  flex-direction: column;
`;


export default function App() {
  // setting up state for rickandmorty api, then get request
  const [characterData, setCharacterData] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log('response here', res);
      const filteredData = res.data.results.filter(item => {
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
      setCharacterData(filteredData);
    })
    .catch((err) => {
      console.log('hey, an error', err);
    })
  }, [input])

  // setting up state & handle change for typed input
  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <AppWrapper>
      <Header />
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route path='/characters' >
        <SearchForm handleChange={handleChange} input={input} />
        <CharacterList characterData={characterData} />
      </Route>
    </AppWrapper>
  );
}
