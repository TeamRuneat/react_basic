import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Loader from './components/common/Loader';
import ErrorFallback from './components/common/ErrorFallback';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        suspense: true,
        useErrorBoundary: true,
        refetchOnWindowFocus: false,
      },
    },
  });
  
  const { reset } = useQueryErrorResetBoundary();

  return(
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;