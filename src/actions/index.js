import axios from 'axios';


export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const LIKE_SONG = "LIKE_SONG";
export const UNLIKE_SONG = "UNLIKE_SONG";

export const UPDATE_USER = "UPDATE_USER";

export const GET_ID = "GET_ID";
export const ID = "ID"


export const loginCall = existingUser => dispatch => {  
        dispatch({type: "GET_ID"})     
        axios
            .post("https://spotify-suggestions-backend.herokuapp.com/auth/login", existingUser)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                console.log(response)
               // localStorage.setItem('id', response.data.id)
                dispatch({type: 'ID', payload: response.data.id})
            })
            .catch(error => {
               dispatch({type: 'CALL_ERROR', payload: error})
            })
        }


export const singupCall = newUser => dispatch => {
    dispatch({type: "GET_ID"})
    axios
        .post("https://spotify-suggestions-backend.herokuapp.com/auth/signup", newUser)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                dispatch({type: 'ID', payload: response.data.id})
            })
            .catch(error => {
                dispatch({type: 'CALL_ERROR', payload: error})
            });
}


export const mapThroughSongs = songsList => dispatch => {
    // Map feature will go here songsList
}