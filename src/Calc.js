import React from 'react'

function Calc() {
    function myFun(f,l){
        var a=f+l;
        return a;
    }
  return (
    <>
      <ol>
             <li>Sum of Two is {myFun(6,5)} </li>


      </ol>


    </>
  )
}

export default Calc
