import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderData=useLoaderData()
    const [user,setUser]=useState(loaderData)
    const btnHandle=(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const reaming=user.filter(data=>data._id !==_id)
            setUser(reaming)
        })
    }
    return (
        <div>
            <h2>This is Your DATA :{user.length}</h2>
            {
                user.map((data)=><p key={data._id}>{data.name}:{data.email}:{data._id}<Link to={`/users/${data._id}`}>Update</Link> <button onClick={()=>btnHandle(data._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;