/* eslint-disable react/prop-types */
const AuthLayout = ({ children }) => {
  return (
    <div className='container-layout p-0 bg-transparent border'>
      <div className='flex flex-col justify-center items-center w-full h-full overflow-auto md:flex-row'>
        <div className='flex flex-col justify-center items-center w-full h-fit pb-5 text-center text-white bg-[#00b4d8] bg-opacity-30 filter backdrop-blur md:h-full'>
          <img src="./logo.svg" alt="logo" className='size-40 mx-auto md:size-60 xl:size-80 object-contain'/>
          <h1 className='text-2xl lg:text-3xl font-semibold'>Trivia App Mastery</h1>
          <p className='hidden md:block px-3 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis quisquam illo! Laboriosam quaerat voluptas, repellat animi consectetur vel ipsum.</p>
        </div>
        <div className='w-full h-full p-3 md:grid md:place-items-center text-white bg-white bg-opacity-30 filter backdrop-blur'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout