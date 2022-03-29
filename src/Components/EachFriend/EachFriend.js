import React from 'react';
import { Navigate } from 'react-router-dom';

const EachFriend = ({FriendDetails}) => {
    const  {id, name, username, email} = FriendDetails;
    const ShowFrndDetails = ()=>{
         const navigation = Navigate();
        const path = `/Eachfriend/${id}`;
        Navigate(path)
    }
   
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={ShowFrndDetails}>{username} {id}</button>
        </div>
    );
};

export default EachFriend;