import React, { useEffect, useState } from 'react'
import { IUser } from '../interfaces/user.interface'
import { Link, useLoaderData } from 'react-router-dom'

const Users:React.FC = () => {

    const users = useLoaderData() as IUser[]
  return (
    <div>
        {users.map(({id, name}) => 
        <Link to={`/users/${id}`} key={id}>
            <h1>{name}</h1>

        </Link>
        )}
    </div>
  )
}

export default Users

export const loader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}