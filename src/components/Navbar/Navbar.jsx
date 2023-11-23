import React from 'react'
import style from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'
import Friend from './Friend/Friend'

const setActive = ({isActive})=>  isActive? style.active_link: ""

// const setStyle = ({isActive})=>({color: isActive && "gold"}) 
// если isActive = true то color:"gold"

export const Navbar = () => {
    


  return (
    <nav className={style.nav}>
        <ul>
            <li className={style.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </li>
            <li className={style.item}>
                <NavLink to="/messages" className={setActive}>Messages</NavLink>
            </li>
            <li className={style.item}>
                <NavLink className={setActive} to="/news" >News</NavLink>
            </li>
            <li className={style.item}>
                <NavLink className={setActive} to="/music" >Music</NavLink>
            </li>
            <li className={style.item}>
                <NavLink className={setActive} to="/settings" >Settings</NavLink>
            </li>
            <li className={style.item}>
                <NavLink className={setActive} to="/users" >Find users</NavLink>
            </li>
        </ul>
        {/* <div className={style.friends}>
            <p className={style.title_friends}>Friends</p>
            <div className={style.friends_list}>
            {
                sidebar.friends.map(({id, name, avatar})=>(
                    <Friend key={id} name={name} avatar={avatar}></Friend>
                ))
            }
            </div>
        </div> */}
    </nav>
  )
}

export default Navbar