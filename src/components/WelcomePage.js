import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Welcome = styled.div`
  margin: 2% auto;
  text-align: center;
  width: 80%;
  background-color: #e4a788;
  padding: 2% 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 60vh;
`
const CharButton = styled.button`
  background-color: #f0e14a;
  padding: 10px 20px;
  color: #e89ac7;
  border: 1px solid black;
  border-radius: 3px;

  &:hover {
    background-color: #97ce4c;
    cursor: pointer;
  }
`

export default function WelcomePage() {
  return (
    <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to='/characters' >
          <CharButton>See the Characters!</CharButton>
        </Link>
    </Welcome>
  );
}
