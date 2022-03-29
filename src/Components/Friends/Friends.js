import React, { useEffect, useState } from 'react';
import EachFriend from '../EachFriend/EachFriend';

const Friends = () => {
    const [Friends, SetFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => SetFriends(data))
    },[])
    return (
        <div>
            <h2>Friends! Welcome to the Router Website</h2>
            <p>Help me some money: {Friends.length}</p>
            {
                Friends.map(everyFriend => <EachFriend
                key={everyFriend.id}
                FriendDetails = {everyFriend}
                ></EachFriend>)
            }
        </div>
    );
};

export default Friends;