import React from 'react'

function Morning() {
  var date = new Date();
  var ate=date.getHours();
  var greet;
  var cssStyle={};
  if(ate>=1 && ate<=12){
    greet='Good Morning'
    cssStyle.color='pink';
  
  }else if(ate>=13 && ate<=18){
    greet='Good Afternoon';cssStyle.color='orange';
  }else if(ate>=19 && ate<=24){
    greet='Good Night';
    cssStyle.color='purple';
  }
  return (
    <>
      <h1>Hi everyone ,<span style={cssStyle}>{greet}</span> </h1>

    </>
  )
}

export default Morning
