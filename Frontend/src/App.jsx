import React, { use } from 'react'
import { Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import { Settings } from 'lucide-react';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import useAuthHook from './hooks/useAuthhook';
import { useEffect } from 'react';

function App() {
  const {authUser} = useAuthHook();

  // check if user is authenticated
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/ signin" />}  />
        <Route path='/pofile' element={<ProfilePage />} />
        <Route path='/settings' element= {<Settings />} />
        <Route path='/signup' element= {<SignUpPage />} />
        <Route path='/signin' element= {<SignInPage />} />
      </Routes>
      

    </div>
  )
}

export default App;