import React from 'react'
import leftData from "./left.json"
const Left = () => {
  return (
    <>
 <div>Tutorial</div>
 {leftData.map((e,i)=>{
      return(
          <div key={i}>
              {/* <div>{e.id}</div> */}
              <div>{e.id}. {e.Title}</div>
              
          </div>
      )
 })}
    </>
   
   
  )
}

export default Left