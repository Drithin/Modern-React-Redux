import { combineReducers } from 'redux';

const songsReducer = () => {
    return  [
        { title: 'Something Just like this', duration: '4:12' },
        { title: 'Let her go', duration: '4:30' },
        { title: 'Boulevard of Broken Dreams', duration: '4:05' },
        { title: 'Animals', duration: '4:20' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

