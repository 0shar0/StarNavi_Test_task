import React from 'react';
import { Header } from '~/view/components';
import { Board } from '~/view/components';
import { HoveredCellsCards } from '~/view/components';
import { StyledTemplate } from '~/view/components/template/Template.styles';

export const Template = (): JSX.Element => {
  return (
    <StyledTemplate>
      <Header />
      <Board />
      <HoveredCellsCards />
    </StyledTemplate>
  );
};
