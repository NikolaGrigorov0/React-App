import { useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { useForm } from '../../hooks/useForm';
import * as carService from '../../services/carService';

import './Edit.css';

export const Edit = () => {
    const { onEditSubmit } = useContext(AuthContext);
    const { id } = useParams();

    const { values, changeHandler, onSubmit, changeValue } = useForm({
        carModel: '',
        year: '',
        imageUrl: '',
        description : '',
    }, onEditSubmit); 

    useEffect(() => {
        const fetchData = async () => {
                const data = await carService.getById(id);
                changeValue(data);
        };
        fetchData();
    }, [id]);
    
    return(
        <div className="container">
        <form onSubmit={onSubmit}>
        <h2>Edit Car Item</h2>
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
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    );
}