import React from 'react'
import style from "./Card.module.css"

function Card() {
  return (
    <div className={style.main}>
      <h6>Test Title</h6>
      <h4>General Knowledge</h4>
      <h6>This test will check your General awareness skill</h6>
      <hr/>
      <div className={style.buttons}>
        <h6>This test is Open</h6>
        <button>Start test </button>
      </div>
    </div>
  )
}

export default Card
