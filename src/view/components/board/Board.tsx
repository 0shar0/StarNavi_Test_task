import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentApplicationSelector, updateApplication } from '~/model/slices';
import { StyledBoard } from '~/view/components/board/Board.styles';

export const Board = () => {
  const { currentApplication } = useSelector(currentApplicationSelector);
  const dispatch = useDispatch();

  return (
    <StyledBoard>
      {currentApplication?.columns.map(({ columnId, column }) => (
        <div key={columnId} className='column'>
          {column.map((cell) => (
            <div
              key={cell.id}
              className={`cell${cell.isHovered ? ' hovered' : ''}`}
              onMouseEnter={() => {
                cell.isHovered = !cell.isHovered;
                dispatch(updateApplication(currentApplication));
              }}
            ></div>
          ))}
        </div>
      ))}
    </StyledBoard>
  );
};
