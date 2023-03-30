import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { CarItem } from './CarItem';
import './Collection.css'


export const Collection = ( { cars } ) => {

  const { isAuthenticated } = useContext(AuthContext);

    return(
            <div className="car-collection">
        { cars.map(car => <CarItem key={car._id} {...car} />) } 
       
            { cars.length === 0  && <h1>Empty array</h1>}
        </div>
    );
    
}