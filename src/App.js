import logo from './logo.svg';
import './App.css';
import Friends from './Components/Friends/Friends';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFriends from './Components/Friends/NotFriends';

function App() {
  return (
    <div className="App">
      <h1>Welcome To my Fancy Routing Website</h1>
    {/*  <Friends></Friends> */}
    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/friends' element={<Friends/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      {/* <Route path='*' element={<NotFriends></NotFriends>}></Route> */}
    </Routes>
    </div>
  );
}

export default App;
