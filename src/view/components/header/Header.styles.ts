import styled from 'styled-components';

export const StyledHeader = styled.form`
  grid-area: head;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .mode-select {
    min-width: 90px;
    min-height: 25px;
    width: 10vw;
    height: 3vh;
  }

  .start-button {
    text-transform: uppercase;
    background-color: #1e79ea;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    min-width: 75px;
    min-height: 25px;
    width: 10vw;
    height: 3vh;
  }
`;
