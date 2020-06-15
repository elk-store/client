import { InputBase } from '@material-ui/core';
import Router from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: visible;

  @media (min-width: 768px) {
    flex: 0 1 auto;
  }

  color: var(--color-white);
  margin: 0 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  text-align: left;
`;

const Input = styled(InputBase)`
  color: inherit !important;

  input {
    padding: 8px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
  }
`;

const Search = () => {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (event.key === 'Enter') {
      Router.push(`/search?q=${event.target.value}`);
    }
  };

  return (
    <Wrapper>
      <Input
        placeholder="What are you looking for?"
        inputProps={{ 'aria-label': 'What are you looking for?' }}
        onKeyPress={handleKeyDown}
      />
    </Wrapper>
  );
};

export { Search };
