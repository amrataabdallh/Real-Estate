import Link from 'next/link'
import React from 'react'

const Button = (props) => {
     const {key, href, label, className} = props 
  return (
     <Link  key={key}  href={href}  className={`button px-6 py-3 bg-black text-white rounded-lg shadow-md border inline-block min-w-[12rem] border-black relative transition duration-300 z-10 hover:bg-gray-800 ${className}`}>
      {label}
    </Link>
  )
}

export default Button