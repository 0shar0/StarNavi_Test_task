import React from 'react';
import { useSelector } from 'react-redux';
import { hoveredCellsSelector } from '~/model/slices';
import { StyledHoveredCellsCards } from '~/view/components/hoveredCellsCard/StyledHoveredCellsCards';

export const HoveredCellsCards = (): JSX.Element => {
  const { hoveredCells } = useSelector(hoveredCellsSelector);

  return (
    <StyledHoveredCellsCards>
      {!!hoveredCells.length &&
        hoveredCells.map(({ row, id, column }) => (
          <div className='card' key={id}>
            row {row} col {column}
          </div>
        ))}
    </StyledHoveredCellsCards>
  );
};
