import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import './Collection.css'


export const Collection = () => {
  const { isAuthenticated } = useContext(AuthContext);
    return(
            <div className="car-collection">
        <div className="car-item">
          <div className="car-image" > {/* style="background-image: url('car2.jpg')" */} </div>
          <div className="car-model">Audi</div>
          <div className="create-year">2010</div>
          <div className="car-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo enim eu quam fermentum, eu ultricies velit luctus. Duis vel ex mauris. </div>
          {isAuthenticated && (<Link to='/details' className="details-btn"> Details </Link>)}
        </div>
        <div className="car-item">
          <div className="car-image" /* style="background-image: url('car2.jpg')" */></div>
          <div className="car-model">BMW</div>
          <div className="create-year">2010</div>
          <div className="car-description">Pellentesque et vestibulum purus. Duis aliquam justo odio, in malesuada neque commodo eget. Vivamus pharetra metus sed erat molestie, ac eleifend lacus commodo. </div>
          {isAuthenticated && (<Link to='/details' className="details-btn"> Details </Link>)}
        </div>
        </div>
    );
}