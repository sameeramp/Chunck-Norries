import React, { useState } from 'react'
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getallJokeItemsFunction, getallJokesFunction } from '../Redux/action';

import Jokes from './Jokes';
import JokesItems from './JokesItems';



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
            <h1 className="m-3 text-4xl text-green-400 animate-bounce font-bold ">Chuck Norries</h1>

        </>
    );
}

export default Category