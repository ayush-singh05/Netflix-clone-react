import React, { useState } from 'react'
import Header from './Header'

function Login() {

  const [isSignInForm,setSignInForm] = useState(true);


  const toggleSignIn = () => {
      setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute my-36 mx-auto right-0 left-0 flex justify-center'>
        <form action="" className='bg-black  p-12 flex flex-col text-white bg-opacity-85 rounded-md'>
          <h1 className='font-semibold text-3xl mb-10'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && <div className='mb-6 w-80'>
            <input type="text"
              className='w-full py-4 pt-4 pr-5 pl-5 rounded-md  outline-none bg-netflix-black'
              placeholder='Full Name'
              onChange={(e) => e.target.value}
            />
          </div>}

          <div className='mb-6 w-80' >
            <input type="text"
              className='w-full py-4 pt-4 pr-5 pl-5 rounded-md  outline-none bg-netflix-black'
              placeholder='Email or phone number'
              onChange={(e) => e.target.value}
            />
          </div>
          <div className='mb-10 w-80 '>
            <input type="password"
              className='w-full py-4 pt-4 pr-5 pl-5 rounded-md  outline-none bg-netflix-black'
              placeholder='Password'
              onChange={(e) => e.target.value}
            />
          </div>

          <button className='bg-netflix-red w-30 p-2 rounded-md'>{isSignInForm ? "Sing In" : "Sign Up"}</button>
          <p className='py-10 text-gray-400'>{isSignInForm ? "New to Netflix? " : "Already register? "}
            <span className='text-white cursor-pointer hover:underline underline-offset-2' onClick={toggleSignIn}>{isSignInForm ? "Sign Up Now" : "Sign In"}</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
