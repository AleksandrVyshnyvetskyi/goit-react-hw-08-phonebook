import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <h3 className="user-name">{user.name}</h3>
      <Button
        onClick={() => dispatch(logOut())}
        sx={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#fda40a',
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
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
        Log Out
      </Button>
    </Stack>
  );
}
