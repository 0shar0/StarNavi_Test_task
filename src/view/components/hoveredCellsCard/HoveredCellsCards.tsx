import React from 'react';
import { useSelector } from 'react-redux';
import { currentApplicationSelector } from '~/model/slices';
import { StyledHoveredCellsCards } from '~/view/components/hoveredCellsCard/StyledHoveredCellsCards';

export const HoveredCellsCards = (): JSX.Element => {
  const { currentApplication } = useSelector(currentApplicationSelector);

  return (
    <StyledHoveredCellsCards>
      {currentApplication?.columns.map(({ columnId, column }) => (
        <div key={columnId} className='column'>
          {column.map(
            (cell) =>
              cell.isHovered && (
                <div key={cell.id} className='card'>
                  row {cell.row} col {cell.column}
                </div>
              ),
          )}
        </div>
      ))}
    </StyledHoveredCellsCards>
  );
};
