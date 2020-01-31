import React from "react";
import styled from 'styled-components';

const CharWrapper = styled.div`
  margin: 2% auto;
  text-align: center;
  width: 90%;
  background-color: #e4a788;
  padding: 2% 0;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const CharCard = styled.div`
  width: 30%;
  border: 5px solid #e89ac7;
  border-radius: 3px;
  color: #f0e14a;	
  margin: 2% 0;
`

export default function CharacterList({characterData}) {

  return (
    <CharWrapper className="character-list">
      {
        characterData.map(item => (
          <CharCard key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
          </CharCard>
        ))
      }
    </CharWrapper>
  );
}
