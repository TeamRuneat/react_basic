import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';

const queryClient = new QueryClient();

const App = () => {
  return(
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
