import React, { useState } from 'react'
import '../index.css';

function ToDoList() {

const [ inputList, setInputList] = useState("")
const [item,setItem] = useState([])

const MyFun = (e)=>{
 
setInputList( e.target.value)

}
const ListOfItems=()=>{
  
setItem((oldItems)=>{
  return[...oldItems, inputList]
})
}


  return (
    <>
    <div>
<div className="main_div">
 <div className="center_div">
  <br />
  <h1>ToDo List</h1>
  <br />
  <div className="inp_div">
  <input type="text" placeholder='Add an Item' onChange={MyFun} />
  <button onClick={ListOfItems}>+</button>
  </div>

  <ol>
   
    {item.map((val)=>{
      return <li>{val}</li>;
    })}
    
  </ol>
 </div>




</div>

    </div>
    </>
  )
}

export default ToDoList