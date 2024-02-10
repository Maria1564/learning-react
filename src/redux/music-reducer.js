const SET_LIST_MUSIC = "SET-LIST-MUSIC"
const PLAY_TRACK = "PLAY_TRACK"

const initialState = {
    tracks: []
}

 const musicReducer = (state = initialState, action) =>{
    switch(action.type){
        //получение списка песен
        case SET_LIST_MUSIC:
            return {...state, tracks: [...state.tracks, ...action.arrTracks]}
        //вкл/выкл воспроизведение песни
        case PLAY_TRACK:
            return {...state, tracks: state.tracks.map((track)=>{
                if(action.idTrack === track.id) return {...track, isPlay: !track.isPlay}
                return {...track, isPlay: false}
            })}

        default: 
        return state
    }
}

export const setMusicAC = (arrTracks)=>({type: SET_LIST_MUSIC, arrTracks})
export const playTrack = (idTrack)=>({type: PLAY_TRACK, idTrack})

export default musicReducer