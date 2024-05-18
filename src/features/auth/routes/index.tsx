import { Route, Routes } from 'react-router-dom';

import { Login } from './Login';
import { Register } from './Register';
import { ForgotPassword } from './ForgotPassword';
import { ConfirmAccount } from './ConfirmAccount';
import { ResetPassword } from './ResetPassword';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="register/:token" element={<ConfirmAccount />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset/:token" element={<ResetPassword />} />
    </Routes>
  );
};