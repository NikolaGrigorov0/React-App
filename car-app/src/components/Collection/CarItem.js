import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";


export const CarItem = ( { 
    _id,
    carModel,
    year,
    imageUrl,
    description,

} ) => 

{
    console.log("log from car item", carModel);
    const { isAuthenticated } = useContext(AuthContext);
    return(
        <div className="car-item">
        <img src={imageUrl} alt={carModel} className="car-image" />
        <div className="car-model">{carModel}</div>
        <div className="create-year">{year}</div>
        <div className="car-description">{description}</div>
        {isAuthenticated && (<Link to='/details' className="details-btn"> Details </Link>)}
      </div>
    );
}