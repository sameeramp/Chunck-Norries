import React, { useState } from 'react'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getallJokeItemsFunction, getallJokesFunction } from '../Redux/action';
import Loading from '../Pages/Loading';
import Error from '../Pages/Error';



const Category = () => {

   
    const [alert, setAlert] = useState(false);
   
    const [category, setCategory] = useState('');
    const [screenSize, setScreenSize] = useState(1500)

    let dispatch = useDispatch()

    let jokes = useSelector((store) => {
        return store.jokeReducer.jokes
    })

    useEffect(() => {
        dispatch(getallJokesFunction())

    }, [])






    let handleclicck = (item) => {
        dispatch(getallJokeItemsFunction(item))
        setAlert(true);
        setCategory(item);
    }


    let jokeItem = useSelector((store) => {
        return store.jokeItemReducer.jokeItem
    })

   
    let isLoading = useSelector((store) => {
        return store.jokeItemReducer.isLoading
    })

    let isError = useSelector((store) => {
        return store.jokeItemReducer.isError
    })

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(window.innerWidth);
        })
    }, [])




    return (

        <>


            <div className={`grid grid-cols-4 ${screenSize < 1135 && 'grid-cols-3'} ${screenSize < 850 && 'grid-cols-2'} ${screenSize < 300 && 'grid-cols-1'} bg-transparent text-white-lg md:gap-y-5 p-5  md:w-fit`}>
                {
                    jokes?.map((card, id) => {
                        return (
                            <div class=" shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  cursor-pointer false md:p-3 ">
                                <h1 onClick={() => (handleclicck(card))} key={id} class=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">{card}</h1>
                                <p class="capitalize text-purple-800 text-sm lg:block md:block hidden">unlimited jokes on {card}</p>
                            </div>

                        )
                    })
                }
                {alert &&

                    <div class=" h-100 w-100 p-4 border-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-xl  text-white text-lg bg-gray-800 ... ">

                        <span className='m-auto' onClick={() => setAlert(false)}>&#10006;</span>
                        <h1 className='text-center font-bold text-2xl mb-5'>{category.toUpperCase()}</h1>
                        {isLoading ? <Loading/> :   <h3 className='font-mono' >"{jokeItem}"</h3> }
                        {isError ? <Error/> : 'Something Went Wrong'}
                      
                        <button className='text-center flex justify-center items-center  m-10 p-2 outline outline-offset-0 bg-blue-900' onClick={() => handleclicck(category)}>More joke</button>

                    </div>



                }



            </div>
            <h1 className="m-3 text-4xl text-green-400 animate-bounce font-bold ">Chuck Norries</h1>

        </>
    );
}

export default Category