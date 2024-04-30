import React from 'react'

function Practice() {
    const a = ["apple","orange","milk"]
  return (
    <div>
      
<ul>
{
a.map((item,index)=>(
<li key={index}>{item}</li>
))



}


</ul>
    </div>
  )
}

export default Practice
