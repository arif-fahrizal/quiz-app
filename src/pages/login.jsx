import { Button } from '../component/Button'
import { Input } from '../component/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [wrongInput, setWrongInput] = useState()

    const navigate = useNavigate()

    const dataUsers = [
        {
            name: 'Admin',
            username: 'admin',
            password: 'admin123'
        },
        {
            name: 'Arif Fahrizal',
            username: 'fahrizal',
            password: 'fahrizal123'
        },
    ]

    
    const handleLogin = async (e) => {
        const auth = dataUsers.find(user => user.username === username && user.password === password)
        auth ? navigate('/') : setWrongInput('Incorrect username or password')
        auth && localStorage.setItem('name', JSON.stringify(auth.name))
        e.preventDefault()
    }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-custom-radial'>
        <div className='flex flex-col justify-center items-center w-96 py-10 rounded-lg bg-white shadow-xl'>
            <h1 className='mb-10 text-4xl font-bold'>Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col w-11/12 gap-5 mx-auto'>
                <Input onChange={e => setUsername(e.target.value)} label="Username" type="text" placeholder="Type your username"/>
                <Input onChange={e => setPassword(e.target.value)} label="Password" type="password" placeholder="Type your password"/>
                <span className='mb-10 text-red-600'>{wrongInput}</span>
                <Button type="submit">Login</Button>
            </form>
        </div>
    </div>
  )
}