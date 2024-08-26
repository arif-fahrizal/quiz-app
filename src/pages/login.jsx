import { Button } from '../component/Button'
import { Input } from '../component/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
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
    authLogin ? 
    // navigate('/')
    navigate('/trivia-app/')
    : alert('Username atau Password salah!')
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
    <div className='flex justify-center items-center w-full h-screen bg-[#1d3557]'>
      <div className='w-full h-screen bg-white overflow-hidden sm:w-[450px] sm:h-[650px] sm:rounded-2xl lg:flex lg:w-[900px] xl:w-[1150px]'>
        <div className='w-full h-60 flex flex-col items-center justify-center text-white bg-[#00b4d8] rounded-b-[30%] lg:h-full lg:rounded-none'>
          <img src="/logo.svg" alt="logo" className='w-40 h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 object-contain'/>
          <h1 className='text-2xl lg:text-3xl font-semibold'>Trivia App Mastery</h1>
          <p className='hidden lg:block px-10 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis quisquam illo! Laboriosam quaerat voluptas, repellat animi consectetur vel ipsum.</p>
        </div>
        <div className='w-full h-full lg:grid lg:place-items-center'>
          <form onSubmit={(e) => isNew ? handleRegister(e) : handleLogin(e)} className='flex flex-col gap-5 w-[300px] h-full mx-auto py-3 sm:w-4/6 lg:h-3/5 lg:p-0 xl:justify-center'>
            <h1 className='text-3xl font-semibold text-center'>{isNew ? 'Register' : 'Login'}</h1>
            <Input onChange={handleChangeUsername} value={getDataInput && getDataInput.username} label="Username" type="text" placeholder="Enter your username"/>
            <Input onChange={handleChangePassword} value={getDataInput && getDataInput.password} label="Password" type="password" placeholder="Enter your password"/>
            {isNew && <Input onChange={handleConfirmPassword} label="Confirm Password" type="password" placeholder="Confirm your password"/>}
            <Button>{isNew ? 'Register' : 'Login'}</Button>
            <p className='text-center'>{ isNew ? 'Already have an account?' : 'Don\'t have an account?'} <span className='text-[#00b4d8] underline cursor-pointer' onClick={() => setIsNew(!isNew)}>{isNew ? 'Login' : 'Register'}</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}


