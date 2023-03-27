import NavigationBar from "./components/Navbar/NavigationBar";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
              <Route path='/' //element={<Home />} 
              />
              <Route path='/login' //element={<Login />} 
              />
              <Route path='/register' //element={<Register />} 
              />
      </Routes>
    </div>
  );
}

export default App;
