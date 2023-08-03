import axios from "axios"
import { JOKEITEM_FAILURE, JOKEITEM_REQUEST_PENDING, JOKEITEM_SUCCESS, JOKE_REQUEST_FAILURE, JOKE_REQUEST_PENDING, JOKE_REQUEST_SUCCESS } from "./actionType"


export const getallJokesFunction = () => ( dispatch ) => {
    dispatch({ type: JOKE_REQUEST_PENDING })
    axios.get(`https://api.chucknorris.io/jokes/categories`)
    .then((res)=>{
       console.log(res.data)
        dispatch({type:JOKE_REQUEST_SUCCESS,payload:res.data})

    })
    .catch((err)=>{
        dispatch({type:JOKE_REQUEST_FAILURE})
    })
}

export const getallJokeItemsFunction = (paramobj) => ( dispatch ) => {
    dispatch({ type: JOKEITEM_REQUEST_PENDING })
    axios.get(`https://api.chucknorris.io/jokes/random?category=${paramobj}`)
    .then((res)=>{
       
        dispatch({type:JOKEITEM_SUCCESS,payload:res.data.value})

    })
    .catch((err)=>{
        dispatch({type:JOKEITEM_FAILURE})
    })
}

