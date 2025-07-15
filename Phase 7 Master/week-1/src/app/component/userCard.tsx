import React from 'react'

interface UserCardProps {
    name:string;
    email:string;
    age:number;
}


function UserCard({name,email,age}:UserCardProps) {
  return (
    <>
        <div className='Card-container'>
            <h1>{`Name : ${name}`}</h1> <br />
            <span>{`Email : ${email}`}</span> <br />
            <span>{`Age : ${age}`}</span> <br />
        </div>
    </>
  )
}

export default UserCard;