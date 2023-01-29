import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiResponseType, axiosBaseQuery, settings } from '~/model';

export const applicationModeService = createApi({
  reducerPath: 'applicationModeService',
  baseQuery: axiosBaseQuery(settings.api_base_url),
  tagTypes: ['ApplicationMode'],
  endpoints: (build) => ({
    getApplicationMode: build.query<ApiResponseType[], void>({
      query: () => {
        return {
          url: '/',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetApplicationModeQuery } = applicationModeService;
