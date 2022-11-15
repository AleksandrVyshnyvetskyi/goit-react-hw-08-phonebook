import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './Route/RestrictedRoute';
import { PrivateRoute } from './Route/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import  Loader  from './loader/Loader'
import './phonebook/Phonebook.css';

const Login = lazy(() => import('../pages/LoginScreen/LoginScreen'));
const Register = lazy(() => import('../pages/Register/Register'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Layout = lazy(() => import('../components/Layout/Layout'));

  export function App() {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);
  
    return isRefreshing ? ( <Loader/>) : (<>

<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      </>
      )
   }
