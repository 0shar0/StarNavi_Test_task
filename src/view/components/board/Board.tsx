import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HoveredCellType } from '~/model';
import { currentApplicationSelector } from '~/model/slices';
import { onHover } from '~/model/slices/hoveredCellsSlice';
import { StyledBoard } from '~/view/components/board/Board.styles';

export const Board = () => {
  const { currentApplication } = useSelector(currentApplicationSelector);
  const dispatch = useDispatch();

  const handleHover = (target: EventTarget, cell: HoveredCellType) => {
    const element = target as Element;
    element.classList.toggle('hovered');
    dispatch(onHover(cell));
  };

  return (
    <StyledBoard>
      {currentApplication?.rows.map(({ rowId, row }) => (
        <div key={rowId} className='row'>
          {row.map((cell) => (
            <div
              key={cell.id}
              className='cell'
              onMouseEnter={({ target }) => {
                handleHover(target, cell);
              }}
            ></div>
          ))}
        </div>
      ))}
    </StyledBoard>
  );
};
