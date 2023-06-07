import React from 'react'


export const Navbar = (props) => {
  const {nav} = props
  return (
      <a className = "font-bold hover:text-gray-400" href='www.google.com'>{nav}</a>
  )
}

export default Navbar