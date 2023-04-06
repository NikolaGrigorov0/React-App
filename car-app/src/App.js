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
import { ErrorHandler } from "./components/ErrorHandler/ErrorHandler";
import { registerValidation } from "./validation/registerValitation";
import { loginValidation } from "./validation/loginValidation";
import { addItemValidation } from "./validation/addItemValidation";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";



function App() {

    const [cars, setCars] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        carService.getAll()
            .then(result => {
                setCars(result)
            });
    }, []);


    const onEditSubmit = async (data) => {
        const error = addItemValidation(data.carModel, data.year, data.imageUrl, data.description);
        if (error !== '') {
            setError(error);
        } else {
        try {
            await carService.editItem(data, data._id);
            navigate('/collection');
            window.location.reload();
        } catch (err) {
            throw new Error(err);
        }
    }
    };

    const onCreateSubmit = async (data) => {
        const error = addItemValidation(data.carModel, data.year, data.imageUrl, data.description);
        if (error !== '') {
            setError(error);
        } else {
            try {

                await carService.createItem(data);
                navigate('/collection');
                setError('');
                window.location.reload();

            } catch (err) {
                throw new Error(err);
            }
        }

    };

    const onLogout = (e) => {
        e.preventDefault()

        localStorage.clear();
        navigate('/');
    }

    const onRegisterSubmit = async (data) => {
        const error = registerValidation(data.username, data.email, data.password, data.confirmPassword);
        setError(error);
        const result = await authService.register(data);
        const responseErr = result.error;
        
        if (error !== '') {
            setError(error);
        }else if(responseErr){
            setError(responseErr);
        } else {

            try {
            const { confirmPassword, ...registerData } = data;
            if (confirmPassword !== registerData.password) {
                return;
            }

                localStorage.setItem('authToken', result.accessToken);
                localStorage.setItem('userId', result._id);

            } catch (err) {
                throw new Error(err);
            }
            navigate('/collection');
            setError('');
        };
    }

    const onLoginSubmit = async (data) => {
        const error = loginValidation(data.email, data.password)
        const result = await authService.login(data);
        const responseErr = result.error;
        if (error !== '' || responseErr) {
            setError(error) || setError(responseErr);
        } else {
            try {

                localStorage.setItem('authToken', result.accessToken);
                localStorage.setItem('userId', result._id);


                navigate('/collection');
                setError('');

            } catch (err) {
                throw new Error(err);
            }
        }
    }

    const contexts = {
        onLoginSubmit,
        onRegisterSubmit,
        onCreateSubmit,
        onLogout,
        onEditSubmit,
        cars: cars,
        isAuthenticated: !!localStorage.getItem('authToken'),
        userId: localStorage.getItem('userId'),
        token: localStorage.getItem('authToken'),
    }

    return (
        <AuthContext.Provider value={contexts}>
            
            <Layout />
            <main id="main-content">
                {error !== '' && <ErrorHandler error={error} />}

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/collection' element={<Collection />} />
                    <Route path='/addItem' element={<AddItem /> }/>
                    <Route path='/details/:id' element={<Details /> } />
                    <Route path='details/:id/edit' element={<Edit />} />
                    <Route path='/*' element={<NotFoundPage />} />
                </Routes>
            </main>

        </AuthContext.Provider>
    );
}

export default App;
