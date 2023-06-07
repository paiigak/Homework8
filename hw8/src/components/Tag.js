import React from 'react'

const Tag = (props) => {
  const {tag} = props
  return (
    <a href="www.google.com" className="text-xl text-stone-300 pr-3 p-1 mr-3 mt-2 border-solid border-white border-2 rounded-3xl">#{tag}</a>
  )
}

export default Tag
