import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { CarItem } from './CarItem';
import './Collection.css'


export const Collection = ({ trigger }) => {
    let { cars } = useContext(AuthContext);
    const createrCars = [];
    if (trigger === true) {
      cars.map((car) => {
        if(car._ownerId === localStorage.getItem("userId")){
            createrCars.push(car);
        }
        cars = createrCars;
    }) 
    }
  
    return (
      <div className="car-collection">
        {cars.map((car) => (
          <CarItem key={car._id} {...car} />
        ))}
        {cars.length === 0 && (
          <h1 className="catalog-page__no-cars">No cars available</h1>
        )}
      </div>
    );
  }