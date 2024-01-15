import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="py-5" style={{background : "#fcba03", height: '100vh'}}>

        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
          <h3 className='text-center title'>Login</h3>
          <p className='text-center'>Login to your account to continue</p>
          <form>
            <CustomInput type='text' label='Email Address' id='email' />
            <CustomInput type='password' label='Password' id='pass' />
            <div className='mt-3 text-end'>
              <Link to='/forgot-password'>Forgot Password</Link>
            </div>
            <Link to='/admin' type='submit' style={{background:'#fcba03'}}
            className='my-3 border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'>
              Login
            </Link>
          </form>
        </div>

      </div>
    </>
  )
}

export default Login