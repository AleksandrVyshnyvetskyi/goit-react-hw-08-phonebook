import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { setFilter } from 'redux/filter/filterSlice';

const CssTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: '#ffa200',
    width: '300px',
  },
  '& .MuiFormLabel-root': {
    color: '#ffa200',
    fontSize: '18px',
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

export default function PhonebookFilter({ filter }) {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <form className="phonebook__form">
      <CssTextField
        margin="normal"
        variant="outlined"
        label="Search..."
        autoComplete="off"
        id={filterId}
        value={filter}
        type="text"
        name="filter"
        onChange={filterChange}
        className="input-phonebook"
      />
      {/* <label htmlFor={filterId}>Find contacts by name</label>
      <input
        autoComplete="off"
        id={filterId}
        value={filter}
        type="text"
        name="filter"
        onChange={filterChange}
        className="input-phonebook"
      /> */}
    </form>
  );
}
