import React from 'react'
import style from "./Card.module.css"
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate()
    function handlePage(){
        navigate("/quizz")
    }
  return (
    <div className={style.main}>
      <h6>Test Title</h6>
      <h4>General Knowledge</h4>
      <h6>This test will check your General awareness skill</h6>
      <hr/>
      <div className={style.buttons}>
        <h6>This test is Open</h6>
        <button onClick={handlePage}>Start test </button>
      </div>
    </div>
  )
}

export default Card
