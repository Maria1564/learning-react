import React from 'react'
import style from "./Users.module.css"

const Users = ({users, follow, unfollow, setUsers}) => {
  if(!users.length) {
    setUsers(
      [
        {id: 1, avatar: "https://goo.su/hf2JCCk", isFollow: true, fullName:"Dmitry K.", status:"All good!", location: {country: "Belarus", city:"Minsk"}},
        {id: 2, avatar: "https://goo.su/lMm8t8", isFollow: true, fullName:"Katy S.", status:"I`m cat", location: {country: "Russia", city:"Kaluga"}},
        {id: 3, avatar: "https://goo.su/rBeiuZ", isFollow: false, fullName:"Vlad V.", status:"No comments)", location: {country: "Russia", city:"Moscow"}},
        {id: 4, avatar: "https://goo.su/WZ8m5Jk", isFollow: true, fullName:"Dany E.", status:"Buuuuuuu!", location: {country: "Serbia", city:"Belgrade"}},
      ]
    )
  }

  return (
    <div>
      <h1>Users</h1>
      <div className={style.list_users}>
        {
          users.length?users.map(({id, avatar,  isFollow, fullName, status, location}) => (
            <div key={id}>
              <div className="">
                <img src={avatar} alt="avatar" className="avatar" width="80px" height="80px"/>
                <button onClick={() => isFollow?unfollow(id):follow(id) }>
                  {isFollow?"unFollow":"follow"}
                </button>
              </div>
              <div className="">
                <div className="info">
                  <p>{fullName}</p>
                  <p>{status}</p>
                </div>
                <div className="location">
                  <p>{location.country}</p>
                  <p>{location.city}</p>
                </div>
              </div>
            </div>
          )): <h3>Loading...</h3>
        }
      </div>
    </div>
  )
}

export default Users