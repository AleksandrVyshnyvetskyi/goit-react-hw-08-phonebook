import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function AuthMenu() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate('/register');
        }}
        variant="contained"
        sx={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#fda40a',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '2px solid #fda40a',
          boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
          borderRadius: '10px',
          marginRight: '15px',
          '&.MuiButton-root:hover': {
            color: '#165563',
            backgroundColor: '#fbb845',
            boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.4)',
          },
        }}
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        variant="contained"
        sx={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#fda40a',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          border: '2px solid #fda40a',
          boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
          borderRadius: '10px',
          '&.MuiButton-root:hover': {
            color: '#165563',
            backgroundColor: '#fbb845',
            boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.4)',
          },
        }}
      >
        Log in
      </Button>
    </div>
  );
}
