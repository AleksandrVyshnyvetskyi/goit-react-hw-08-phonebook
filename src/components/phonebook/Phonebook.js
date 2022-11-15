import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { addContact } from 'redux/operations/operations';

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

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'gender':
        setGender(value);
        break;

      default:
        return;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
      gender,
    };
    setName('');
    setNumber('');
    setGender('');
    dispatch(addContact(contact));
  };

  let nameId = nanoid();
  let numberId = nanoid();

  return (
    <form className="phonebook__form" onSubmit={handleSabmit}>
      <CssTextField
        margin="normal"
        label="Name"
        variant="outlined"
        onChange={handleChange}
        id={nameId}
        value={name}
        name="name"
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <CssTextField
        margin="normal"
        label="Number"
        variant="outlined"
        onChange={handleChange}
        id={numberId}
        value={number}
        type="tel"
        name="number"
        autoComplete="off"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <div className="form-gender">
        <div>
          <label htmlFor="man">Male</label>
          <input
            type="radio"
            name="gender"
            className="form-gender__btn"
            id="man"
            value="man"
            onChange={handleChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="woman">Female</label>
          <input
            type="radio"
            name="gender"
            className="form-gender__btn"
            id="woman"
            value="woman"
            onChange={handleChange}
            required
          ></input>
        </div>
      </div>
      <Button
        type="submit"
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
            backgroundColor: '#165563',
            border: '2px solid #fda40a',
            boxShadow: '0px 0px 10px 10px rgba(255, 162, 0, 0.2) inset',
          },
        }}
      >
        Add contact
      </Button>
    </form>
  );
}
