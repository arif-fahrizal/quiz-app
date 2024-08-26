import { Link, useNavigate } from 'react-router-dom'

import { ChartBarIcon, HomeIcon, PhoneIcon, UserIcon } from '@heroicons/react/16/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Navbar = () => {
  const dataAccount = JSON.parse(localStorage.getItem('dataAccount')) || [{username: '', isLogin: false}]
  const [{isLogin}] = dataAccount.filter(data => data.isLogin === true).length > 0 ? dataAccount.filter(data => data.isLogin === true) : dataAccount
  const navigate = useNavigate()

  // console.log(isLogin)

  const handleLogout = () => {
    dataAccount.map((data) => data.isLogin = false)
    localStorage.setItem('dataAccount', JSON.stringify(dataAccount))
    localStorage.removeItem('index')
    window.location.reload()
  }

  const handleLogin = () => {
    // navigate('/login')
    navigate('/trivia-app/login')
  }
  return (
    <div className='relative flex justify-between w-72 h-14 mx-auto mt-3 rounded-full bg-[#112A4E] shadow'>
      <ul className='flex items-center gap-10 px-5 text-white'>
        <li className='hover:text-slate-400 transition-all'>
          <Link to='/'><HomeIcon className='w-8 h-8'/></Link>
        </li>
        <li className='hover:text-slate-400 transition-all'>
          <Link to='/score'><ChartBarIcon className='w-8 h-8'/></Link>
        </li>
        <li className='hover:text-slate-400 transition-all'>
          <Link to='/contact'><PhoneIcon className='w-8 h-8'/></Link>
        </li>
        <li className='w-[32px] h-[32px]'>
          <Menu >
            <MenuButton className=''><UserIcon className="w-8 h-8 hover:text-slate-400 transition-all"/></MenuButton>
            <MenuItems transition className="absolute z-10 mt-3 -right-1 px-5 py-1 rounded-md shadow bg-[#112A4E] hover:bg-[#0d213e]" >
              <MenuItem onClick={() => isLogin ? handleLogout() : handleLogin()}><span>{isLogin ? 'Logout' : 'Login'}</span></MenuItem>
            </MenuItems>
          </Menu>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

