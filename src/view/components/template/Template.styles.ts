import styled from 'styled-components';

export const StyledTemplate = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'head head'
    'board result'
    'board result';
  grid-template-rows: 200px 1fr;
  grid-template-columns: 1fr 0.5fr;
`;
