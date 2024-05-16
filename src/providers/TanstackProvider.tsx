'use client'
import { ReactNode, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NavBar from '@/components/NavBar/NavBar';

const queryClient = new QueryClient();


const TanstackProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser]=useState<String>("");
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TanstackProvider