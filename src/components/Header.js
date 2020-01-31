import React from "react";
import styled from 'styled-components';

const RMHeader = styled.div`
  margin: 2% auto;
  text-align: center;
  width: 80%;
  background-color: #e4a788;
  padding: 2% 0;
  border-radius: 5px;
`


export default function Header() {
  return (
    <RMHeader>
      <h1>Rick &amp; Morty Fan Page</h1>
    </RMHeader>
  );
}
