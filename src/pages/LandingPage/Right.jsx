import React from 'react'
import RightJson from "./right.json"
const Right = () => {
  return (
    <> <div>XML</div>
    {RightJson.map((item, index) => {
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

export default Right