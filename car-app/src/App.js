import { AuthContext } from "./contexts/authContext";
import * as authService from './services/authService';
import * as carService from './services/carService';
import { Route, Routes, useNavigate } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import { useEffect, useState } from "react";
import { Collection } from "./components/Collection/Collection";
import { AddItem } from "./components/AddItem/AddItem";



function App() {

    const [auth, setAuth] = useState({});
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                console.log("log from useEffecr", result);
                setCars(result)
            });
    }, []);


    const onCreateSubmit = async (data) => {
        try{

            const result = await carService.createItem(data);

            console.log(result);

        }catch(err){
            throw new Error(err);
        }

    };

    const onLogout = (e) => {
        e.preventDefault()

        localStorage.clear();
        navigate('/');
    }

    const onRegisterSubmit = async (data) => {
        try {

            const result = await authService.register(data);
            localStorage.setItem('authToken', result.accessToken);
            setAuth(result);

            
        } catch (err) {
            throw new Error(err);
        }

        navigate('/collection');
    }

    const onLoginSubmit = async (data) => {
        try {

            const result = await authService.login(data);
            localStorage.setItem('authToken', result.accessToken);
            setAuth(result);

        } catch (err) {
            throw new Error(err);
        }

        navigate('/collection');
    }

    const contexts = {
        onLoginSubmit,
        onRegisterSubmit,
        onCreateSubmit,
        onLogout,
        isAuthenticated: !!localStorage.getItem('authToken'),
        userId: auth._id,
        token: localStorage.getItem('authToken'),
    }

    return (
        <AuthContext.Provider value={contexts}>

            <Layout />
            <main id="main-content">

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/collection' element={<Collection cars={ cars }/>} />
                    <Route path='/addItem' element={<AddItem />} />
                </Routes>
            </main>

        </AuthContext.Provider>
    );
}

export default App;
