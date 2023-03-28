import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";



function App() {
  return (
    <main id="main-content">
      <Layout />

      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' //element={<Login />} 
              />
              <Route path='/register' //element={<Register />} 
              />
      </Routes>
    </main>
  );
}

export default App;
