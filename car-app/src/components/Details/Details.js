import * as carService from '../../services/carService';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

import './Details.css';

export const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { userId } = useContext(AuthContext);
    const [carData, setCarData] = useState({});
    const isOwner = userId === carData._ownerId;
    const [count, setCount] = useState(-1);


    const onDelete = async (currentId) => {
        await carService.deleteItem(currentId);
        try {
        } catch (err) { console.log(err); }
        navigate('/collection');
        window.location.reload();
    }

    const onLike = async () => {
        const likes = carData.likes;
        if (!likes.users.includes(userId)) {
            likes.users.push(userId);
            likes.count++;
            setCount(likes.count);
            carService.updateLikes({...carData, likes}, id);

        } else if (likes.users.includes(userId)) {
            
            const index = likes.users.indexOf(userId);
            if (index !== -1) {
                likes.users.splice(index, 1);
            }
            likes.count--;
            setCount(likes.count);
            carService.updateLikes({...carData, likes}, id);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await carService.getById(id);
            setCarData(data);
            setCount(data.likes.count)
        };
        fetchData();
    }, [id]);

    return (
        <div className="car-details">
            <img src={carData.imageUrl} alt={carData.carModel} className="car-details__image" />
            <h2 className="car-details__heading">{carData.carModel} ({carData.year})</h2>
            <p className="car-details__description">{carData.description}</p>
            <div className='buttons'>
                <div className="heart-button">
                    <button>
                        <i className="heart-icon">
                            <span className="text" onClick={onLike}>♥</span>
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
