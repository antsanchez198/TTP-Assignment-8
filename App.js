import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Homepage from './Pages/Homepage';
import UserProfile from './Pages/UserProfile';
import NavBar from './Components/NavBar';
import {useState} from 'react';
import Debit from './Pages/Debit';
import AccountBalance from './Components/AccountBalance';
import Credit from './Pages/Credit';


function App() {

  const [accountBalance, setAccountBalance] = useState(14568.27)
  const [currentUser, setCurrentUser] = useState({ userName: "antsanchez", memberSince: '10/01' })

  return (
    <div className = "app">
      <BrowserRouter>
          <NavBar/>
        <Routes>                                  
          <Route path = "/UserProfile" element = {<UserProfile userName = {currentUser.userName} memberSince = {currentUser.memberSince}/>}/>
          <Route path = "/home" element = {<Homepage accountBalance={accountBalance}/>}/>
          <Route path = "/" element = {<Homepage accountBalance={accountBalance}/>}/>
          <Route path = "/home/debit" element = {<Debit accountBalance={accountBalance}/>}/>
          <Route path = "/home/credit" element = {<Credit accountBalance={accountBalance}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
