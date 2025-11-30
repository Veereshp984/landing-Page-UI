import React from 'react'
import Rightcard from './Rightcard'

const rightcontent = (props) => {
  return (
    <div className='h-full w-3/4  p-6 flex gap-12 flex-nowrap overflow-x-auto' >
        {props.users.map((elem,idx)=>{
          
          return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default rightcontent
