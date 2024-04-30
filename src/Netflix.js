import React from 'react'

function Netflix(props) {
  return (
    <>

    <div className="cards">
        <div className="card">
            <img src={props.imgSrc} alt="" className='card_img' />
            <div className="info_text">
                <span className="card_category">{props.category}</span>
                <h3 className="card_title">{props.title}</h3>
                <a href= {props.link} target='_blank'>
                <button>Watch Now</button>
                </a>
            </div>
        </div>
    </div>
 
    </>
  )
}

export default Netflix
