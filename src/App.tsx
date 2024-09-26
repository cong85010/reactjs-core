import { ConfigProvider } from 'antd';
import { Router } from './routes';
import './App.css';
import queryClient from './queryClient';
import { AuthProvider } from './context/AuthContext';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
};

export default App;
