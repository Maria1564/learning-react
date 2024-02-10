import React, { useEffect } from 'react'
import style from "./Music.module.css"
// import iHeart from "/src/assets/icon_heart.svg"
// import iHeartActive from "/src/assets/icon_heart_active.svg"


const Music = ({tracks, setListMusic, playTrack}) => {


!tracks.length &&  setListMusic([
    {id: 1, imageSong: "https://clck.ru/38ghJ9", artist: "Twenty One Pilots", nameSong: "Stressed Out",  time: "3:22", isPlay: false},
    {id: 2, imageSong: "https://clck.ru/38ghJ9", artist: "Alan Walker", nameSong: "Faded",  time: "3:32", isPlay: false},
    {id: 3, imageSong: "https://clck.ru/38ghJ9", artist: "K-391, Alan Walker & Ahrix", nameSong: "End of Time",  time: "3:05", isPlay: false},
    {id: 4, imageSong: "https://clck.ru/38ghJ9", artist: "MGMT", nameSong: "Time to Pretend",  time: "3:40", isPlay: false},
    {id: 5, imageSong: "https://clck.ru/38ghJ9", artist: "Alan Walker, Ruben", nameSong: "Heading Home",  time: "3:05", isPlay: false},
    {id: 6, imageSong: "https://clck.ru/38ghJ9", artist: "Моя Мишель", nameSong: "Зима в сердце",  time: "4:05", isPlay: false},
    {id: 7, imageSong: "https://clck.ru/38ghJ9", artist: "Twenty One Pilots", nameSong: "Heathens",  time: "3:15", isPlay: false},
    {id: 8, imageSong: "https://clck.ru/38ghJ9", artist: "Баста", nameSong: "На заре",  time: "5:06", isPlay: false},
    {id: 9, imageSong: "https://clck.ru/38ghJ9", artist: "5УТРА", nameSong: "Давай сбежим (Искорки)",  time: "2:31", isPlay: false},
    {id: 10, imageSong: "https://clck.ru/38ghJ9", artist: "Coldplay", nameSong: "Paradise",  time: "5:36", isPlay: false},

  ])
  return (
    <>
    <div className={style.music}>
      <h2>Music</h2>
      <a href="">Смотреть все</a>
      <div className={style.music_list}>
        {tracks?.map((song)=>(
          <div className={`${style.track} ${song.isPlay ? style.activeTrack: ""}`} key={song.id} onClick={()=>{playTrack(song.id)}}  >
            <img src={song.imageSong} alt="song" width="55px" height="55px"/>
            <div className="track_wrapper">
              <div>
                <span>{song.nameSong}</span>
              </div>
              <div>
                <span className='track_artist'>{song.artist}</span>
              </div>
            </div>
            <span className={style.track_time}>{song.time}</span>
          </div>
        ))}
      </div>
    </div>
    {/* <div className={style.bar_content}>
      <div className={style.player_progress}>player_progress</div>
      <div className={style.player_control}>player_control 
        <img className={style.icon_heart} src={iHeart} alt="" />
        <img className={style.icon_heart} src={iHeartActive} alt="" />
      </div>
    </div> */}
    </>
  )
}

export default Music