import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { CarItem } from './CarItem';
import './Collection.css'


export const Collection = () => {
    const { cars } = useContext(AuthContext);
    const { reloadIndicator } = useContext(AuthContext);

    if(reloadIndicator){
        try{
        window.location.reload();
        reloadIndicator = false;
        }catch(err){}
    }

    return(
            <div className="car-collection">
        { cars.map(car => <CarItem key={car._id} {...car} />) } 
       
            { cars.length === 0  &&  <h1 className="catalog-page__no-cars">No cars available</h1>}
        </div>
    );
    
}