import { ProfileAPI } from '@/api/profile';
import SeoWrapper from '@/hoc/SeoWrapper';
import { useFetch } from '@/hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export const Component = function AdminDashboard(): JSX.Element {
  const navigate = useNavigate();
  const { data } = useFetch(ProfileAPI.get);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <SeoWrapper title="Admin Dashboard" description="Admin dashboard">
      <div>
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </SeoWrapper>
  );
};
