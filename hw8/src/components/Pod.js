import React from 'react'


export const Pod = (props) => {
  const {pod} = props
  return (
    <div className="p-8 flex flex-row justify-center">
     <img className="w-1/3 mr-16"src="https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2"alt="img" />
      <div className="w-1/3">
      <div className="flex flex-row pb-2">
        <div className="pr-3 text-xs text-rose-500">{pod.author}</div>
        <div className="pr-3 text-xs text-stone-300">{pod.date}</div>
        <div className="pr-3 text-xs text-stone-300" >{pod.readingTime}</div>
      </div>
        <div className="flex flex-col">
          <a href='{pod.url}' className="text-2xl pb-2 font-bold">{pod.header}</a>
          <a href='{pod.url}' className="text-sm text-stone-300 pb-2">{pod.description}</a>
        </div>
        </div>
    </div>
  )
}

export default Pod
