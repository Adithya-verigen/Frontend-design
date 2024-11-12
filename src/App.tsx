import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.page';
import SignupPage from './pages/Signup.page';
import VerificationPage from './pages/verification.page';
import ForgotPasswordPage from './pages/forgotpswd.page';
import AuthVerifyPage from './pages/authentication.page';
import SetNewPasswordPage from './pages/setnewpswd.page';
import PasswordVerified from './pages/pswdverified.page'; // Importing the new component

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/verification' element={<VerificationPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/auth-verify' element={<AuthVerifyPage />} />
        <Route path='/set-new-password' element={<SetNewPasswordPage />} />
        <Route path='/password-verified' element={<PasswordVerified />} /> {/* New route for Password Verified */}
      </Routes>
    </>
  );
}

export default App;