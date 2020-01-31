import React from "react";
import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin: 2% auto;
  text-align: center;
  width: 80%;
  background-color: #e4a788;
  padding: 2% 0;
  border-radius: 5px;
`

export default function SearchForm({handleChange, input}) {
  return (
    <SearchWrapper>
      <label>
        Search for your favorite character:{' '}
        <input type='text' name='search' value={input} onChange={handleChange} />
      </label>
    </SearchWrapper>
  );
}
