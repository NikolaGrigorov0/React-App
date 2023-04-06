import { useEffect, useState } from 'react';
import * as authService from '../../services/authService';

import './Profile.css';

export const Profile = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        authService.getUser(localStorage.getItem("token"))
        .then((result) => setData(result));
    }, [])
    return(
        <div className="profile-container">
        <h2>User Profile</h2>
        <div className="profile-data">
          <div className="profile-item">
            <span className="profile-label">Username:</span>
            <span className="profile-value">{`${data.username}`}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
            <span className="profile-value">{data.email}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Cars Added:</span>
            <span className="profile-value">10</span>
          </div>
          <div className="profile-item">
            <a href="/customCattalog" className="profile-link">View Cars</a>
          </div>
        </div>
      </div>

    );
}