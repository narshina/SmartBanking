import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { Register } from './user/register';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './Login';
import { Navbar } from './user/Navbar';
import { Userhome } from './user/Userhome';
import { Transaction } from './user/Transaction';
import { AdminHome } from './Admin/Home';
import { Usermange } from './Admin/Usermange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
       
     
    </Routes>
    <Routes>
      <Route path='/user' element={<Navbar/>}>
        <Route index element={<Userhome/>}/>
        <Route path='trans' element={<Transaction/>}/>
        </Route>
    </Routes>
    <Routes>
      <Route path='/admin' element={<AdminHome/>}/>
      <Route path='usermanage/:id' element={<Usermange/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
