import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from './components/login/Login';
import {SignUp} from './components/signUp/SignUp'
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </Router>
  );
}

export default App;
