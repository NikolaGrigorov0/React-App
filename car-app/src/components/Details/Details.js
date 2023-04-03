import * as carService from '../../services/carService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import * as extraService from '../../services/extraService';

import './Details.css';

export const Details =  () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { userId } = useContext(AuthContext);
    const [carData, setCarData] = useState({});
    const isOwner = userId === carData._ownerId;
    const count =  extraService.getLikes();


    const onDelete = async (currentId) => {
        await carService.deleteItem(currentId);
        try {
        } catch (err) { console.log(err); }
        navigate('/collection');
        window.location.reload();
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
            <div className='buttons'>
            <div class="heart-button">
                <button>
                    <i class="heart-icon">
                    <span class="text" >♥</span>
                    </i>
                    <p className='count'>{count}</p>
                </button>
            </div>
            {isOwner && <Link to='edit' className="car-details__button car-details__edit-button" >Edit</Link>}
            {isOwner && <button className="car-details__button car-details__delete-button" onClick={() => onDelete(id)}>Delete</button>}
            </div>
        </div>
           
    );

}
