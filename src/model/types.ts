import { BaseQueryFn } from '@reduxjs/toolkit/query';
import { AxiosRequestConfig } from 'axios';
import { ApplicationBoard, Cell } from '~/utils';

export type ApiResponseType = {
  name: string;
  field: number;
};

export type CurrentApplicationState = {
  currentApplication: ApplicationBoard | null;
};

export type ColumnsType = {
  column: Cell[];
  columnId: string;
};

export type AxiosBaseQueryType = (baseUrl: string) => BaseQueryFn<AxiosBaseQueryFnType>;

export type AxiosBaseQueryFnType = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};
