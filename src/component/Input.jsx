/* eslint-disable react/prop-types */
export const Input = ({ onChange, value, label, type, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="text-sm tracking-wide">{label}</label>
      <input onChange={onChange} value={value} id={label} type={type} placeholder={placeholder} className="w-full py-3 border-b-[2.3px] border-gray-300 outline-none bg-transparent" required />
    </div>
  )
}
