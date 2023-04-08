import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

import './Profile.css';

export const Profile = () => {
    let userData = localStorage.getItem("userData").split(',');
    let count = 0;
    const { cars } = useContext(AuthContext);
    cars.map(car => {
      if(car.creater == userData[0]){
        count++;
      }
    });


    return(
        <div className="profile-container">
        <h2>User Profile</h2>
        <div className="profile-data">
          <div className="profile-item">
            <span className="profile-label">Username:</span>
            <span className="profile-value">{userData[0]}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{userData[1]}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Cars Added:</span>
            <span className="profile-value">{count}</span>
          </div>
          <div className="profile-item">
            <a href="/customCollection" className="profile-link">View Cars</a>
          </div>
        </div>
      </div>

    );
}