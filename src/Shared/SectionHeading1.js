import React from 'react'

const SectionHeading1 = ({firstTitle,secondTitle}) => {
  return (
   <div>
     <h1 className='md:text-[40px] xls:text-[30px] font-bold text-black'>{firstTitle}
        <span className='text-[#6E2142]'>{secondTitle}</span></h1>
        
   </div>
  )
}

export default SectionHeading1