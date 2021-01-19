import React from 'react';
import img from './Images/sidebar/user.jpg';

const UserInfo = () => {
    return (
        <>
        <div className="userInfo">
            <img className="user-img" src={img} alt="" />
                <div className="user-detail">
                    <h6>Dmitry Noshenko</h6>
                    <span>jan 22 2010,10 min read</span>
                </div>
        </div>
        </>
    )
}

export default UserInfo;
