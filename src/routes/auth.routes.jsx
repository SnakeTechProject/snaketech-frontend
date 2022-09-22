import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { DefaultLayout } from '../layout/DefaultLayout';
import { ResetPassword } from '../pages/ResetPassword';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Route>
    </Routes>
  );
}
