import React, { useState } from 'react'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getallJokeItemsFunction, getallJokesFunction } from '../Redux/action';

import Jokes from './Jokes';
import JokesItems from './JokesItems';



const Category = () => {


    const [alert, setAlert] = useState(false);

    const [category, setCategory] = useState('');
  

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

   



    return (

        <div className="bg-gradient-to-r from-blue-500 to-black  h-fit p-1  flex flex-col items-center justify-center sm:h-200 sm:p-50">
      


            <div className={` grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4  bg-transparent text-white-lg md:gap-y-3 p-5 h-fit gap-5 md:w-fit`}>
                {
                    jokes?.map((card, id) => (
                        <Jokes key={id}
                            handleclicck={handleclicck}
                            card={card}
                            id={id}
                        />

                    ))
                }
                {alert &&

                    <JokesItems
                        alert={alert}
                        jokeItem={jokeItem}
                        category={category}
                        handleclicck={handleclicck}
                        setAlert={setAlert}
                        isLoading={isLoading}
                        isError={isError}
                    />





                }



            </div>
            <h1 className="m-3 text-4xl text-green-400 h-fit p-12  animate-bounce font-bold ">Chuck Norries</h1>

            </div>
    );
}

export default Category