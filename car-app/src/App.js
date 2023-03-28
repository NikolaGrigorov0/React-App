import { authContext } from "./contexts/authContext";

import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register/Register";



function App() {
  return (
    <authContext.Provider value={onRegisterSubmit}>

      <Layout />
    <main id="main-content">

      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' //element={<Login />} 
              />
      </Routes>
    </main>

</authContext.Provider>
  );
}

export default App;
