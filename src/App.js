import './App.css';
import ConnectPage from './components/ConnectPage';
import DoctorProfile from './components/DoctorProfile';
import DoctorsDetail from './components/DoctorsDetails';
import GetStarted from './components/GetStarted';
import Home from './components/Home';
import LogInDoctor from './components/LogInDoctor';
import Main from './components/Main';
import ProfilePage from './components/Profile';
import RegisterPage from './components/RegisterPage';
import SignUpPage from './components/SignUpPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="/connectPage" element={<ConnectPage />} />
        <Route path="/doctorsDetails/:slug" element={<DoctorsDetail />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />
        <Route path="/logInDoctor" element={<LogInDoctor />} />
        <Route path="/" element={<Home />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
