import { Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/Settings';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import useAuthHook from './hooks/useAuthhook';
import { useEffect } from 'react';
import NavBar from './components/NavBar';

function App() {
  const {authUser, checkAuth} = useAuthHook();

  // check if user is authenticated
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  return (
    <div>
      <NavBar authUser={authUser} />

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/signin" />} />

        <Route path='/pofile' element={authUser ? <ProfilePage /> : <Navigate to="/signin" />} />

        <Route path='/settings' element= {<SettingsPage />} />

        <Route path='/signup' element= {<SignUpPage />} />

        <Route path='/signin' element= {!authUser ? <SignInPage /> : <Navigate to="/" /> } />
      </Routes>
      
    </div>
  )
}

export default App;