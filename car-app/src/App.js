import { AuthContext } from "./contexts/authContext";
import * as authService from './services/authService';

import { Layout } from "./components/Layout/Layout";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { useState } from "react";



function App() {

  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const onRegisterSubmit = async (data) => {
    try{

    const result = await authService.register(data);
    setAuth(result);
    console.log(data);

    navigate('/collection');

    } catch(err){
      throw new Error(err);
    }
  }

  const onLoginSubmit = async (data) => {

    try{

    const result = await authService.login(data);
    setAuth(result);

    }catch (err){
      throw new Error(err);
    }

    navigate('/collection');
  }

  const contexts = {
    onLoginSubmit, 
    onRegisterSubmit,
    isAuthenticated: !!auth.accessToken,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
  }

  return (
    <AuthContext.Provider value={contexts}>

      <Layout />
    <main id="main-content">

      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
      </Routes>
    </main>

</AuthContext.Provider>
  );
}

export default App;
