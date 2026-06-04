import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import React from 'react';

const queryClient = new QueryClient();

const RootLayout = () => {

  return (
    <QueryClientProvider client={queryClient}>

      <Stack />

    </QueryClientProvider>
  )
}

export default RootLayout