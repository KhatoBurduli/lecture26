import React from 'react'
import { useOutletContext } from 'react-router-dom'

const User:React.FC = () => {
    const obj:{message:string} = useOutletContext()
  return (
    <div>
        <h1>{obj.message}</h1>
    </div>
  )
}

export default User