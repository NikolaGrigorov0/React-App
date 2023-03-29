//import './Login.css';
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
const { onLoginSubmit } = useContext(AuthContext);
const {values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
}, onLoginSubmit);

    return(
        <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" value={values.email} onChange={changeHandler} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
        </div>
        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
      </form>
    );
}