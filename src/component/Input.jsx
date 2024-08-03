/* eslint-disable react/prop-types */
export const Input = ({ onChange, label, type, placeholder }) => {
  return (
    <div className="grid place-items-start">
        <label htmlFor={label} className="text-sm tracking-wide">{label}</label>
        <input onChange={onChange} id={label} type={type} placeholder={placeholder} className="w-full py-3 border-b-[2.3px] border-gray-300 outline-none bg-transparent" required />
    </div>
  )
}
