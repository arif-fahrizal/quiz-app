/* eslint-disable react/prop-types */
export const Button = ({ onClick = () => {}, children }) => {
  return (
    <button onClick={onClick} className='px-5 py-1.5 text-base text-white rounded-md border-none outline-none transition-all bg-[#112A4E] hover:bg-[#0d213e]'>{children}</button>
  )
}
