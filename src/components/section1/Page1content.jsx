import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightcontent'
const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 px-8 h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users} />
      
    </div>
  )
}

export default Page1content
