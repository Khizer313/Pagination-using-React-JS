import React from 'react'


function State() {

    constructor(()=>{
    
        this.state={
            msg:"hello bro",
        }
        
        // function myFun(){
        //     this.setState({
        //         msg:"good change now",
        //     })
        // }
        myFun(()=>{
        this.setState({
            msg:"good change now"
        })
        
        })
        
        });



  return (
    <>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>{this.myFun()}}>hmm</button>



    </>
  )
}

export default State
