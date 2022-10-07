import React from 'react';
import './App.css';
import { Tabular } from './components/Tabular';
import { QueryClientProvider, QueryClient } from 'react-query'
import { Header } from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Tabular />
    </QueryClientProvider>
  );
}

export default App;
