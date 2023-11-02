import React from 'react'

import { useNavigate } from 'react-router-dom'


const Music = () => {
  const navigate = useNavigate()
  const toHome = ()  => navigate(-1)

  return (
    <div>
      Music
      <button onClick={toHome}>Go Back</button>
    </div>
  )
}

export default Music