import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <div>Welcome to ISKCON</div>
      <div>
        <Link to={'/'}> Home </Link>
      </div>
      <div>
        <Link to={'signin'}> Sign In </Link>
      </div>
      <div>
        <Link to={'signup'}> Sign Up </Link>
      </div>
    </>
  )
}

export default Home
