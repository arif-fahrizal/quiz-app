import Navbar from "./Navbar"

/* eslint-disable react/prop-types */
export const ContainerLayout = ({children}) => {
  return (
    <section className='container-layout overflow-auto sm:overflow-hidden'>
      <Navbar />
      <div className='w-full h-full mt-5 sm:px-5 lg:mt-0'>
        {children}
      </div>
    </section>
  )
}