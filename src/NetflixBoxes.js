import React from "react";
import Netflix from "./Netflix";
import "./index.css";

function NetflixBoxes() {
  const fun = [
    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },

    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },

    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },
    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },
    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },
    {
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "A Netflix Original Series",
      title: "Dark",
      link: "https://www.netflix.com/in/title/80990668?source=35",
    },
  ];

  var MyFun = fun.map((val) => {
    return (
      <Netflix
        imgSrc={val.imgSrc}
        category={val.category}
        title={val.title}
        link={val.link}
      />
    );
  });

  return (
    <>
      {MyFun}



      {/* <Netflix
         imgSrc={fun[0].imgSrc} 
       category={fun[0].category}
         title ={fun[0].title}
         link  = {fun[0].link}
/> */}



      {/* <Netflix
         imgSrc={fun[0].imgSrc} 
       category={fun[0].category}
         title ={fun[0].title}
         link  = {fun[0].link}
/>




<Netflix
         imgSrc={fun[0].imgSrc} 
       category={fun[0].category}
         title ={fun[0].title}
         link  = {fun[0].link}
/>





<Netflix
         imgSrc={fun[0].imgSrc} 
       category={fun[0].category}
         title ={fun[0].title}
         link  = {fun[0].link}
/>  */}
    </>
  );
}
export default NetflixBoxes;
