import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="header">
      <h1 className="header-title">PHONEBOOK</h1>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </div>
  );
}
