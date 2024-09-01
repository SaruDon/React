import React from 'react'
import { useParams } from 'react-router'

const User = () => {
const {id} = useParams()

  return (
    <div className='bg-gray-700 text-white text-3xl p-4 text-center align-middle'>User: {id}</div>
  )
}

export default User