import React from 'react'
import Loading from '../Pages/Loading'
import Error from '../Pages/Error'

function JokesItems({category,setAlert,jokeItem,handleclicck,isLoading,isError}) {
    return (
        <div class=" h-100 w-100 p-4 border-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-xl  text-white text-lg bg-gray-800 ... ">

        <span className='m-auto' onClick={() => setAlert(false)}>&#10006;</span>
        <h1 className='text-center font-bold text-2xl mb-5'>{category.toUpperCase()}</h1>
        {isLoading ? <Loading/> : <h3 className='font-mono' >"{jokeItem}"</h3>}
        {isError ? <Error/> : 'Something Went Wrong'}

        <button className='text-center flex justify-center items-center  m-10 p-2 outline outline-offset-0 bg-blue-900' onClick={() => handleclicck(category)}>More joke</button>

    </div>

    )
}

export default JokesItems
