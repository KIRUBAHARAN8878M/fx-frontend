
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import PasswordRest from'./components/Auth/PasswordRest';
import OtpVerify from './components/Auth/OtpVerify';
import Portal from './components/Dasboard/Portal';
import DataSet1 from './components/Dasboard/DataSet1';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/resetpassword' element={<PasswordRest/>}/>
        <Route path='/reset-password-page' element={<OtpVerify/>}/>
        
        <Route path="/portal" element={<Portal />} >

        <Route path="data" element={<DataSet1 />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
