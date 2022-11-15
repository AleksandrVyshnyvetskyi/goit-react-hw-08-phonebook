import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getState } from 'redux/contacts/contactsSelector';
import { getFilteredContacts } from 'redux/contacts/contactsSelector';
import { getFilter } from 'redux/filter/filterSelectors';
import PhonebookForm from 'components/phonebook/Phonebook';
import PhonebookList from 'components/phonebook/PhonebookList';
import PhonebookFilter from 'components/phonebook/PhonebookFilter';
import Loader from 'components/loader/Loader';
// import { toggleBGD } from 'components/toggleBG/togleBGD';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
    // toggleBGD();
    const bgd = document.querySelector('.login-screen-bgd');
    bgd.style.background =
      'linear-gradient( rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(https://raw.githubusercontent.com/AleksandrVyshnyvetskyi/goit-react-hw-08-phonebook/main/src/components/phonebook/img/background.jpg)';
  }, [dispatch]);
  return (
    <>
      <h1 className="phonebook-title">Phonebook</h1>
      <PhonebookForm />
      <>
        <h2>Contacts :</h2>
        <PhonebookFilter filter={filter} />
        {isLoading && <Loader />}
        {!isLoading && contacts.length > 0 && (
          <PhonebookList contactsList={contacts} />
        )}
        {error && <p>Oops... Something went wrong...</p>}
      </>
      {isLoading && <Loader />}
    </>
  );
}
