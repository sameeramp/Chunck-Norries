import { JOKE_REQUEST_FAILURE, JOKE_REQUEST_PENDING, JOKE_REQUEST_SUCCESS } from "../actionType"

let initialstate = {
    isLoading: false,
    isError: false,
    jokes: [],
}


export const reducer = ( state = initialstate, { type, payload }) => {

    switch (type) {

        case JOKE_REQUEST_PENDING:
            return {
                isLoading: true,
                isError: false,

            }
        case JOKE_REQUEST_FAILURE:
            return {
                isLoading: false,
                isError: true,

            }

        case JOKE_REQUEST_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                jokes: payload,

            }

        default:
            return state


    }

}

