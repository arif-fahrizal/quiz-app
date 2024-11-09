/* eslint-disable react/prop-types */
import { Input } from "../component/Input"

const LoginLayout = ({ handleUsername, handlePassword, usernameValue, passwordValue }) => {
  return (
    <>
      <Input onChange={handleUsername} value={usernameValue} label="Username" type="text" placeholder="Enter your username"/>
      <Input onChange={handlePassword} value={passwordValue} label="Password" type="password" placeholder="Enter your password"/>
    </>
  )
}

export default LoginLayout