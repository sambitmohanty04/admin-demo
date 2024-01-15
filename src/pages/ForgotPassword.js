import React from 'react'
import CustomInput from '../components/CustomInput'
 
const ForgotPassword = () => {
  return (
    <>
      <div className="py-5" style={{background : "#fcba03", height: '100vh'}}>

        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
          <h3 className='text-center title'>Forgot Password</h3>
          <p className='text-center'>Please enter your registered email address</p>
          <form>
            <CustomInput type='text' label='Email Address' id='email' />
            
            <button type='submit' style={{background:'#fcba03'}}
            className='my-3 border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'>
              Send
            </button>
          </form>
        </div>

        </div>
    </>
  )
}

export default ForgotPassword