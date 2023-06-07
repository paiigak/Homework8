import React from 'react'
import Tag from './Tag';

const Blog = (props) => {
  const { blog } = props
  return (
    <div className="w-2/5 p-8">
      <div className="flex flex-row pb-2">
        <div className="pr-3 text-xs text-rose-500">{blog.author}</div>
        <div className="pr-3 text-xs text-stone-300">{blog.date}</div>
        <div className="pr-3 text-xs text-stone-300" >{blog.readingTime}</div>
      </div>
        <div className="flex flex-col m-auto">
        <a href='{blog.url}' className="text-2xl pb-2 font-bold">{blog.header}</a>
        <a href='{blog.url}' className="text-sm text-stone-300 pb-2">{blog.description}</a>
        <div className="pt-4">{blog.tags.map((tag,i)=> {
          return <Tag key={i} tag={tag}/>
        })}</div>
        </div>
    </div>  
  )
}

export default Blog