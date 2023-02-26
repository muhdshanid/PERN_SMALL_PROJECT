import React from 'react'
import StyledSignup ,{SignupButton} from '../styled/Signup.Styled'
const Signup = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <StyledSignup>
        <form onSubmit={onSubmit}>
            <div>
                <h1>Social Media App</h1>
                <sub>PERN FULLSTACK APP</sub>
            </div>
            <SignupButton >
              <p>Sign in with Google</p>  <i className='fa-brands fa-google'/></SignupButton>
        </form>
    </StyledSignup>
  )
}

export default Signup