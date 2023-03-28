import { AuthContext } from "./contexts/authContext";
import * as authService from './services/authService';

import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register/Register";



function App() {

  const onRegisterSubmit = async (data) => {
    await authService.register(data);
    console.log(data);
  }

  return (
    <AuthContext.Provider value={{onRegisterSubmit}}>

      <Layout />
    <main id="main-content">

      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' //element={<Login />} 
              />
      </Routes>
    </main>

</AuthContext.Provider>
  );
}

export default App;
