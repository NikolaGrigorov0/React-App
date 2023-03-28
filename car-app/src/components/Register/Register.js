import { AuthContext } from '../../contexts/authContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

import './Register.css';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const {values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit)

    return(
        <form id="register" onSubmit={onSubmit}>
      <h2>Register Form</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={values.username} onChange={changeHandler} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} required />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} onChange={changeHandler} required />
      <button type="submit">Register</button>
    </form>
    );
}