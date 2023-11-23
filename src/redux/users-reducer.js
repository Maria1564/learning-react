const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const initialState = {
    users: [
        // {id: 1, avatar: "https://goo.su/hf2JCCk", isFollow: true, fullName:"Dmitry K.", status:"All good!", location: {country: "Belarus", city:"Minsk"}},
        // {id: 2, avatar: "https://goo.su/lMm8t8", isFollow: true, fullName:"Katy S.", status:"I`m cat", location: {country: "Russia", city:"Kaluga"}},
        // {id: 3, avatar: "https://goo.su/rBeiuZ", isFollow: false, fullName:"Vlad V.", status:"No comments)", location: {country: "Russia", city:"Moscow"}},
        // {id: 4, avatar: "https://goo.su/WZ8m5Jk", isFollow: true, fullName:"Dany E.", status:"Buuuuuuu!", location: {country: "Serbia", city:"Belgrade"}},
    ]
}


const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case FOLLOW :
            return {...state, users: state.users.map((user)=>{
                if(user.id === action.userId) return {...user, isFollow: true}

                return user
            })}

        case UNFOLLOW:
            return {...state, users: state.users.map(user => {
                if(user.id === action.userId)  return {...user, isFollow: false}
                return user
            })}
        
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
            
        default:
            return state
    }
}


export const followAc = (userId) =>( {type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer