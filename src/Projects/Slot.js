import React, { useState } from "react";


function Slot() {

var a =new Date().toLocaleTimeString();

const [count , setCount] = useState(a);
// const MyFun = () => {
//   a =new Date().toLocaleTimeString();
//   setCount(a) 
// }
// setInterval(MyFun,1000)

setInterval(() => {
  a =new Date().toLocaleTimeString();
  setCount(a)
}, 1000);




  // var hour = new Date().getHours();
  // var mint = new Date().getMinutes();
  // var seconds;
  // seconds = new Date().getSeconds();

  return (
    <>

<h1>{count}</h1>



      {/* ------ main is parent div */}
      {/* <div className="main"> */}
      {/* ------ clock have two  div ,time and button */}
      {/* <div className="clock">
          <div className="time">
            <div className="hour"> <h4>{hour}:</h4> </div>
            <div className="mint"><h4>{mint}:</h4></div>
            <div className="seconds"><h4>{seconds}</h4></div>
          </div> */}

      {/* </div> */}
      {/* ----- end of clock div */}

      {/* </div> */}
    </>
  );
}

export default Slot;
