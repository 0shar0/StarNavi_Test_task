import styled from 'styled-components';

export const StyledBoard = styled.div`
  grid-area: board;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .cell {
    border: black solid 1px;
    min-width: 25px;
    min-height: 25px;

    &.hovered {
      background-color: blue;
    }
  }
`;
