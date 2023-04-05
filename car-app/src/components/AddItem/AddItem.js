import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { useForm } from '../../hooks/useForm';

import './AddItem.css';
import { useNavigate } from 'react-router-dom';

export const AddItem = () => {
    const { onCreateSubmit } = useContext(AuthContext);
    const navigate = useNavigate();

    const { values, changeHandler, onSubmit } = useForm({
        carModel: '',
        year: '',
        imageUrl: '',
        description : '',
    }, onCreateSubmit); 

    useEffect(() => {
      if(!localStorage.getItem('authToken')){
          navigate('/failed');
      }
  }, []);

    return(
        <div className="container">
        <form onSubmit={onSubmit}>
        <h2>Create Car Item</h2>
          <div className="input-field">
            <label htmlFor="carModel">Car model</label>
            <input type="text" id="carModel" name="carModel" value={values.carModel} onChange={changeHandler} />
          </div>
          <div className="input-field">
            <label htmlFor="year">Year</label>
            <input type="text" id="year" name="year" value={values.year} onChange={changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={changeHandler}/>
          </div>
          <div className="input-field">
            <label htmlFor="description ">Description</label>
            <textarea id="description " name="description" value={values.description } onChange={changeHandler}></textarea>
          </div>
          <div className="btn-container">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    );
}