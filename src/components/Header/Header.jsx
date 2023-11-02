// rafce
import React from 'react'
import style from "./Header.module.css"

const Header = () => {

  return (
    <header className={style.header}>
        <div className={style.header__wrapper}>
            <div className={style.logo}>
                <img src="../src/assets/logo.svg" alt="logo" width={80} height={80}/>   
            </div>
        </div>
    </header>
  )
}

export default Header