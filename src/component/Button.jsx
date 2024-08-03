/* eslint-disable react/prop-types */
export const Button = ({ onClick = () => {}, children }) => {
  return (
    <button onClick={onClick} className='bg-custom-radial text-base text-white font-bold py-2 px-4 rounded-3xl border-none outline-none'>{children}</button>
  )
}
