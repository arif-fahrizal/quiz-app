import Navbar from "./Navbar"

/* eslint-disable react/prop-types */
export const ContainerLayout = ({children}) => {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#1d3557] bg-citylife bg-no-repeat bg-cover bg-center bg-blend-color-burn transition-all'>
      <section className='w-full h-screen bg-white overflow-hidden sm:w-[550px] sm:h-[700px] sm:rounded-2xl lg:w-[900px] xl:w-[1150px]'>
        <Navbar />
        <div className='w-11/12 h-full mx-auto mt-5'>
          {children}
        </div>
      </section>
    </div>
  )
}
