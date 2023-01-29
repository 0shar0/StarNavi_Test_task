import React, { FormEventHandler, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useGetApplicationModeQuery } from '~/model';
import { initApplication } from '~/model/slices';
import { StyledHeader } from '~/view/components/header/Header.styles';

export const Header = (): JSX.Element => {
  const { data } = useGetApplicationModeQuery();
  const selectRef = useRef<HTMLSelectElement>(null);
  const dispatch = useDispatch();

  const handleClick: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (selectRef && selectRef.current && selectRef.current.value) {
      dispatch(initApplication(parseInt(selectRef.current.value)));
    }
  };

  return (
    <StyledHeader onSubmit={handleClick}>
      <select ref={selectRef} className='mode-select' name='mode-select'>
        <option value=''>Pick mode</option>
        {data?.map(({ name, field }) => {
          return (
            <option key={name} value={field}>
              {name}
            </option>
          );
        })}
      </select>
      <button type='submit' className='start-button'>
        start
      </button>
    </StyledHeader>
  );
};
