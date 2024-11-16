import { useNavigate } from 'react-router-dom'
import { Button } from '../component/Button'
import { Input } from '../component/Input'
import AuthLayout from '../layouts/AuthLayout'
import { useState } from 'react'

const LoginPage = () => {
  const navigate = useNavigate()
  const [dataAccount, setDataAccount] = useState(() => {
    const savedData = localStorage.getItem("dataAccount")
    return savedData ? JSON.parse(savedData) : []
  })

  const [getDataInput, setGetDataInput] = useState({ username: "", password: "" })

  const handleLogin = (e) => {
    e.preventDefault()
    
    // Cek apakah ada akun yang cocok
    const user = dataAccount.find(({ username, password }) => username === getDataInput.username && password === getDataInput.password)

    if (user) {
      updateLoginStatus(user)
      navigate("/")
    } else {
      alert("Username atau Password salah!")
    }
  }

  // Update status login untuk pengguna yang valid
  const updateLoginStatus = (user) => {
    // Simpan data yang login ke localStorage
    localStorage.setItem("index", dataAccount.indexOf(user))

    // Update status login untuk pengguna yang valid
    const updatedDataAccount = dataAccount.map((data) =>
      data.username === user.username ? { ...data, isLogin: true } : data
    )

    setDataAccount(updatedDataAccount)
    localStorage.setItem("dataAccount", JSON.stringify(updatedDataAccount))
  }

  // Fungsi untuk menangani perubahan input username
  const handleChangeUsername = (e) => {
    setGetDataInput((prev) => ({ ...prev, username: e.target.value }))
  }

  // Fungsi untuk menangani perubahan input password
  const handleChangePassword = (e) => {
    setGetDataInput((prev) => ({ ...prev, password: e.target.value }))
  }

  return (
    <AuthLayout>
      <form onSubmit={(e) => handleLogin(e)} className='flex flex-col justify-center items-center gap-3 mx-auto mt-10 sm:w-5/6 md:h-full md:mt-0'>
        <h1 className='text-3xl font-semibold text-center'>Login</h1>
        <Input onChange={handleChangeUsername} value={getDataInput.username} label="Username" type="text" placeholder="Enter your username"/>
        <Input onChange={handleChangePassword} value={getDataInput.password} label="Password" type="password" placeholder="Enter your password"/>
        <Button>Login</Button>
        <p className='text-center'>{'Don\'t have an account?'}<span className='text-[#00b4d8] underline cursor-pointer' onClick={() => navigate('/register')}> Register</span></p>
      </form>
    </AuthLayout>
  )
}

export default LoginPage