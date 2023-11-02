
const initialState = {
    friends: [
      {
        id: 1,
        name: "Vlad",
        avatar: "https://kurl.ru/NUSXi",
      },
      {
        id: 2,
        name: "Dany",
        avatar: "https://kurl.ru/dzdMC",
      },
      {
        id: 3,
        name: "Katy",
        avatar: "https://kurl.ru/VCtjI",
      },
    ],
}

const sidebarReducer = (state = initialState, action) =>  {
    return state
}

export default sidebarReducer