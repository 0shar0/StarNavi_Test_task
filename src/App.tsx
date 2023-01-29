import React from 'react';
import { useGetApplicationModeQuery } from '~/model';
import { PageLoader, Template } from '~/view/components';

export const App = () => {
  const { isLoading } = useGetApplicationModeQuery();
  return isLoading ? <PageLoader /> : <Template />;
};
