import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosRequestConfig } from 'axios';
import { ApplicationBoard } from '~/utils';

export type ApiResponseType = {
  name: string;
  field: number;
};

export type CurrentApplicationState = {
  currentApplication: ApplicationBoard | null;
};

export type HoveredCellType = {
  column: number;
  row: number;
  id: string;
};

export type HoveredCellsStateType = {
  hoveredCells: HoveredCellType[];
};

export type CellType = {
  readonly id: string;
  readonly column: number;
  readonly row: number;
};

export type RowType = {
  row: CellType[];
  rowId: string;
};

export type AxiosBaseQueryType = (baseUrl: string) => BaseQueryFn<AxiosBaseQueryFnType>;

export type AxiosBaseQueryFnType = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};
