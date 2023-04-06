import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";


export const CarItem = ( { 
    _id,
    carModel,
    year,
    imageUrl,
    description,
    creater,

}) => {
    const { isAuthenticated } = useContext(AuthContext);
    return(
        <div className="car-item">
        <img src={imageUrl} alt={carModel} className="car-image" />
        <div className="car-model">{carModel}</div>
        <div className="create-year">{year}</div>
        <div className="car-description">{description}</div>
        {isAuthenticated && (<Link to={`/details/${_id}`} className="details-btn"> Details </Link>)}
         <div className="creater">Added by: {creater}</div> 
      </div>
    );
}