import React from 'react'
import { connect } from 'react-redux'
import Music from './Music'
import { setMusicAC, playTrack } from '../../redux/music-reducer'

const mapStateToProps = (state)=>{
    return {
        tracks: state.musicPage.tracks
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setListMusic: (arrTracks)=> (dispatch(setMusicAC(arrTracks))),
        playTrack: (idTrack) =>(dispatch(playTrack(idTrack))),
    }
}


const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)
export default MusicContainer