import React from "react";

export default function CharacterList({characterData}) {

  return (
    <section className="character-list">
      {
        characterData.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
          </div>
        ))
      }
    </section>
  );
}
