import { ConfigProvider } from 'antd';
import { Router } from './routes';
import './App.css';
import SeoWrapper from './hoc/SeoWrapper';
import queryClient from './queryClient';
import { AuthProvider } from './context/AuthContext';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <SeoWrapper>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </SeoWrapper>
  );
};

export default App;
