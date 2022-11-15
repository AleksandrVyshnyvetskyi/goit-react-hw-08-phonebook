import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#ffa200',
    fontSize: '20px',
    width: '300px',
  },
  '& .MuiFormLabel-root': {
    color: '#ffa200',
  },
  '& label.Mui-focused': {
    color: '#ffa200',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffa200',
      boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: '#ffa200',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffa200',
      boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
    },
  },
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className="loginScreen-box">
      <h1 className="phonebook-title loginScreen-title">Log in to Phonebook</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <CssTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="off"
        />
        <CssTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            padding: '15px',
            marginTop: '20px',
            color: '#165563',
            backgroundColor: '#fbb845',
            borderRadius: '10px',
            height: '60px',
            boxShadow: '0px 5px 10px 6px rgba(139, 211, 225, 0.2)',
            '&.MuiButton-root:hover': {
              color: '#fda40a',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '2px solid #fda40a',
              boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
