import * as carService from '../../services/carService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Details.css';
import { useState, useEffect } from 'react';

export const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [carData, setCarData] = useState({});
    const { reloadIndicator } = useContext(AuthContext);
    
    const onDelete = async (currentId) => {
        await carService.deleteItem(currentId);
        reloadIndicator = true;
        navigate('/collection');
    }

    useEffect(() => {
        const fetchData = async () => {
                const data = await carService.getById(id);
                setCarData(data);
        };
        fetchData();
    }, [id]);

    return (
        <div className="car-details">
          <img src={carData.imageUrl} alt={carData.carModel} className="car-details__image" />
          <h2 className="car-details__heading">{carData.carModel} ({carData.year})</h2>
          <p className="car-details__description">{carData.description}</p>
          <Link to='edit' className="car-details__button car-details__edit-button" >Edit</Link>
          <button className="car-details__button car-details__delete-button" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}
