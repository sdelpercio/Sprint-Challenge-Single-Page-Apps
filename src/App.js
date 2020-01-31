import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header.js";


export default function App() {
  // setting up state for rickandmorty api
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
    </main>
  );
}
