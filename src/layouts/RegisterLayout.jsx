/* eslint-disable react/prop-types */
import { Input } from '../component/Input'

const RegisterLayout = ({ handleUsername, handlePassword, confirmPassword, usernameValue, passwordValue, confirmValue }) => {
  return (
    <>
      <Input onChange={handleUsername} value={usernameValue} label="Username" type="text" placeholder="Enter your username"/>
      <Input onChange={handlePassword} value={passwordValue} label="Password" type="password" placeholder="Enter your password"/>
      <Input onChange={confirmPassword} value={confirmValue} label="Confirm Password" type="password" placeholder="Confirm your password"/>
    </>
  )
}

export default RegisterLayout