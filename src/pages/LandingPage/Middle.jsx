import React from 'react'
import MiddleData from "./middle.json"
const Middle = () => {
  return (
    <>
<div>HTML</div>
{MiddleData.map((item, index) => {
  return (
    <div key={index}>
      {/* <div>{item.Introduction}</div> */}
      <div dangerouslySetInnerHTML={{ __html: item.Introduction }} />
      {/* <div>{item.id}</div> */}
    </div>
  )
}
)}
    </>
    
  )
}

export default Middle