import React from 'react'
import style from "./Music.module.css"
import iHeart from "/src/assets/icon_heart.svg"
import iHeartActive from "/src/assets/icon_heart_active.svg"
import { useNavigate } from 'react-router-dom'


const Music = () => {
  

  return (
    <>
    <div className={style.musics_list}>
    musics_list
    </div>
    <div className={style.bar_content}>
      <div className={style.player_progress}>player_progress</div>
      <div className={style.player_control}>player_control 
        <img className={style.icon_heart} src={iHeart} alt="" />
        <img className={style.icon_heart} src={iHeartActive} alt="" />
      </div>
      
    </div>
    </>
  )
}

export default Music