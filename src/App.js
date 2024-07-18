import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import MyProfile from './pages/MyProfile/MyProfile';
import Friends from './pages/Friends/Friends';
import '../src/stayles/styles.scss';
import './utils/i18n';

function App() {
  return (
    <Suspense fallback={'...Loading'}>  
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='register' element={<Register/>} />
          <Route path='login' element={<Login/>} />
          <Route path='myprofile' element={<MyProfile/>} />
          <Route path='friends' element={<Friends/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
