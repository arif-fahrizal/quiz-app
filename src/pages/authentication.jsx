import { Button } from '../component/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterLayout from '../layouts/RegisterLayout'
import LoginLayout from '../layouts/LoginLayout'

export const AuthPage = () => {
  const [dataAccount, setDataAccount] = useState(localStorage.getItem('dataAccount') ? JSON.parse(localStorage.getItem('dataAccount')) : [
    {
      username: 'admin',
      password: 'admin123',
      isLogin: false
    }
  ])
  const [getDataInput, setGetDataInput] = useState('')
  const [isNew, setIsNew] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    const authLogin = dataAccount.some( data => data.username === getDataInput.username && data.password === getDataInput.password)
    dataAccount.map((data) => {
      data.username === getDataInput.username && data.password === getDataInput.password ? data.isLogin = true : data.isLogin = false
    })
    localStorage.setItem('dataAccount', JSON.stringify([...dataAccount]))
    authLogin ? navigate('/') : alert('Username atau Password salah!')
    e.preventDefault()
  }
  const handleRegister = (e) => {
    const existingUsername = dataAccount.find((data) => data.username === getDataInput.username)
    const confirmPassword = getDataInput.password !== getDataInput.confirmPassword

    getDataInput.username.length < 6 || getDataInput.password.length < 6 ? (alert('Username dan Password minimal 6 karakter!')) :
    confirmPassword ? (alert('Password dan Confirm Password tidak cocok!')) :
    existingUsername ?( alert('Username sudah terdaftar!')) :
    (
      setDataAccount( prev => [...prev, { username: getDataInput.username, password: getDataInput.password, isLogin: false }]),
      localStorage.setItem('dataAccount', JSON.stringify([...dataAccount, { username: getDataInput.username, password: getDataInput.password, isLogin: false }])),
      setGetDataInput(''),
      setIsNew(false),
      alert('Akun berhasil didaftarkan!')
    )
    
    e.preventDefault()
  }

  const handleChangeUsername = (e) => {
    setGetDataInput(prev => ({ ...prev, username: e.target.value }))
  }
  const handleChangePassword = (e) => {
    setGetDataInput(prev => ({ ...prev, password: e.target.value }))
  }
  const handleConfirmPassword = (e) => {
    setGetDataInput(prev => ({ ...prev, confirmPassword: e.target.value }))
  }
  
  return (
    <div className='container-layout p-0 bg-transparent border'>
      <div className='flex flex-col justify-center items-center w-full h-full overflow-auto md:flex-row'>
        <div className='flex flex-col justify-center items-center w-full h-fit pb-5 text-center text-white bg-[#00b4d8] bg-opacity-30 filter backdrop-blur md:h-full'>
          <img src="./logo.svg" alt="logo" className='size-40 mx-auto md:size-60 xl:size-80 object-contain'/>
          <h1 className='text-2xl lg:text-3xl font-semibold'>Trivia App Mastery</h1>
          <p className='hidden md:block px-3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis quisquam illo! Laboriosam quaerat voluptas, repellat animi consectetur vel ipsum.</p>
        </div>
        <div className='w-full h-full p-3 md:grid md:place-items-center text-white bg-white bg-opacity-30 filter backdrop-blur'>
          <form onSubmit={(e) => isNew ? handleRegister(e) : handleLogin(e)} className='flex flex-col justify-center items-center gap-3 mx-auto mt-10 sm:w-5/6 md:h-full md:mt-0'>
            <h1 className='text-3xl font-semibold text-center'>{isNew ? 'Register' : 'Login'}</h1>
            { isNew ? 
            <RegisterLayout handleUsername={handleChangeUsername} handlePassword={handleChangePassword} confirmPassword={handleConfirmPassword} usernameValue={getDataInput.username} passwordValue={getDataInput.password} confirmValue={getDataInput.confirmPassword} /> : 
            <LoginLayout handleUsername={handleChangeUsername} handlePassword={handleChangePassword} usernameValue={getDataInput.username} passwordValue={getDataInput.password} /> }
            <Button>{isNew ? 'Register' : 'Login'}</Button>
            <p className='text-center'>{ isNew ? 'Already have an account?' : 'Don\'t have an account?'} <span className='text-[#00b4d8] underline cursor-pointer' onClick={() => setIsNew(!isNew)}>{isNew ? 'Login' : 'Register'}</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}