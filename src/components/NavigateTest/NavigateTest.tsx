import { useNavigate } from 'react-router-dom';

export const NavigateTest = () => {
  const navigate = useNavigate();

  return (
    <button name="navigateBtn" onClick={() => navigate('/elsewhere')}>
      navigate me back
    </button>
  );
};
