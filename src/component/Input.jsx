import { useEffect, useRef } from "react"

/* eslint-disable react/prop-types */
export const Input = ({ onChange, value, label, type, placeholder }) => {
  const focusRef = useRef(null)

  useEffect(() => {
    type === 'text' && focusRef.current.focus()
  }, [type])

  return (
    <div className="w-full">
      <label htmlFor={label} className="text-sm tracking-wide">{label}</label>
      <input ref={focusRef} onChange={onChange} value={value} id={label} type={type} placeholder={placeholder} className="w-full py-3 border-b-[2.3px] border-gray-300 outline-none bg-transparent" required autoComplete="off"/>
    </div>
  )
}
