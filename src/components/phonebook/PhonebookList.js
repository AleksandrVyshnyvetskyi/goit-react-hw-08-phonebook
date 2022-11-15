import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeContact } from 'redux/contacts/contactsOperations';
import man from './img/man.jpg';
import woman from './img/woman.jpg';
import nogender from './img/nogender.png';

export default function PhonebookList({ contactsList }) {
  function icon(gender) {
    if (gender === 'man') {
      return man;
    } else if (gender === 'woman') {
      return woman;
    } else {
      return nogender;
    }
  }

  console.log(contactsList);

  const removeMessage = () => {
    return Notiflix.Report.failure('Remove', 'Contact removed', 'Close', {
      svgSize: '200px',
      titleFontSize: '24px',
      messageFontSize: '20px',
      buttonFontSize: '16px',
      width: '300px',
      backOverlay: true,
      backOverlayClickToClose: true,
    });
  };

  const dispatch = useDispatch();
  const oneContacts = contactsList.map(({ id, name, number, gender }) => {
    return (
      <li key={id} className="list-item">
        <img src={icon(gender)} alt="contact-icon" className="gender-icon" />

        <a href={`tel:${number}`}>
          {name}: <span>{number}</span>
        </a>

        <IconButton
          onClick={() => dispatch(removeContact(id), removeMessage())}
          aria-label="delete"
          size="large"
          sx={{
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'rgba(255, 162, 0, 0.2) ',
            },
          }}
        >
          <DeleteIcon
            fontSize="inherit"
            sx={{
              '&.MuiSvgIcon-root:hover': {
                color: '#e65100',
              },
              color: '#fda40a',
            }}
          />
        </IconButton>
      </li>
    );
  });

  return <ul>{oneContacts}</ul>;
}
