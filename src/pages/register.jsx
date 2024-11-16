import { useState } from 'react'
import { Button } from '../component/Button'
import { Input } from '../component/Input'
import AuthLayout from '../layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [getDataInput, setGetDataInput] = useState('')
  const getDataAccount = JSON.parse(localStorage.getItem('dataAccount')) || []

  const handleRegister = (e) => {
    e.preventDefault()
  
    // Mengecek apakah username sudah terdaftar
    const existingUsername = getDataAccount.find((data) => data.username === getDataInput.username)
    const confirmPassword = getDataInput.password !== getDataInput.confirmPassword
  
    // Validasi input
    if (getDataInput.username.length < 6 || getDataInput.password.length < 6) {
      alert('Username dan Password minimal 6 karakter!')
      return
    }
  
    if (confirmPassword) {
      alert('Password dan Confirm Password tidak cocok!')
      return
    }
  
    if (existingUsername) {
      alert('Username sudah terdaftar!')
      return
    }
  
    // Menyimpan data akun baru
    const newAccount = {
      username: getDataInput.username,
      password: getDataInput.password,
      isLogin: false,
    }

    localStorage.setItem('dataAccount', JSON.stringify([...getDataAccount, newAccount]))
  
    alert('Akun berhasil didaftarkan!')
    navigate('/login')
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
    <AuthLayout>
      <form onSubmit={(e) => handleRegister(e)} className='flex flex-col justify-center items-center gap-3 mx-auto mt-10 sm:w-5/6 md:h-full md:mt-0'>
        <h1 className='text-3xl font-semibold text-center'>Register</h1>
        <Input onChange={handleChangeUsername} value={getDataInput.username} label="Username" type="text" placeholder="Enter your username"/>
        <Input onChange={handleChangePassword} value={getDataInput.password} label="Password" type="password" placeholder="Enter your password"/>
        <Input onChange={handleConfirmPassword} value={getDataInput.confirmPassword} label="Confirm Password" type="password" placeholder="Confirm your password"/>
        <Button>Register</Button>
        <p className='text-center'>Already have an account?<span className='text-[#00b4d8] underline cursor-pointer' onClick={() => navigate('/login')}> Login</span></p>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage