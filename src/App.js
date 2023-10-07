import logo from './logo.svg';
import './App.css';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Header from './components/Header/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/header' element={<Header/>}/>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
