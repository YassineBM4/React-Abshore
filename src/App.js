import './App.css';
import Navbar from './Components/Navbar'
import Home from './pages/Home';
import HowToDeposit from './pages/HowToDeposit';
import DepositCheck from './pages/DepositCheck'
import AboutUs from './pages/AboutUs'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
import BankLink from './pages/BankLink';
import AddBankCard from './pages/AddBankCard';
import Modal from './Components/Modal';
import SelectBank from './pages/SelectBank';
import TakePhoto from './pages/TakePhoto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/HowToDeposit" element={<HowToDeposit/>} />
          <Route path="/DepositCheck" element={<DepositCheck/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/BankLink" element={<BankLink/>} />
          <Route path="/AddBankCard" element={<AddBankCard/>} />
          <Route path="/Modal" element={<Modal/>} />
          <Route path="/SelectBank" element={<SelectBank/>} />
          <Route path="/TakePhoto" element={<TakePhoto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
