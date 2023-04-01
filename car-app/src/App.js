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
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";



function App() {

    const [auth, setAuth] = useState({});
    const [cars, setCars] = useState([]);
    let [reloadIndicator, setIndicator] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll()
            .then(result => {
                console.log("log from useEffecr", result);
                setCars(result)
            });
    }, []);

    const onEditSubmit = async (data) => {
        try{
            await carService.editItem(data, data._id);
            setIndicator(true);
            navigate('/collection');
        }catch(err){
            throw new Error(err);
        }
    };

    const onCreateSubmit = async (data) => {
        try{

            await carService.createItem(data);
            setIndicator(true);
            navigate('/collection');

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
        onEditSubmit,
        cars:cars,
        reloadIndicator,
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
                    <Route path='/collection' element={<Collection/>} />
                    <Route path='/addItem' element={<AddItem />} />
                    <Route path='/details/:id' element={<Details />} />
                    <Route path='details/:id/edit' element={<Edit />} />
                </Routes>
            </main>

        </AuthContext.Provider>
    );
}

export default App;
