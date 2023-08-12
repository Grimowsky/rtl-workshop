import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export const NavigateTest = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="default"
      size="default"
      onClick={() => navigate('/elsewhere')}
    >
      Navigate ME
    </Button>
  );
};
