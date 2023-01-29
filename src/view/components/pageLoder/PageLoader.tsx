import { StyledPageLoader } from '~/view/components/pageLoder/PgaeLoader.styles';

export const PageLoader = () => {
  return (
    <StyledPageLoader>
      <div className='lds-hourglass'></div>
    </StyledPageLoader>
  );
};
