import { JOKEITEM_FAILURE, JOKEITEM_REQUEST_PENDING, JOKEITEM_SUCCESS } from "../actionType"

let initialstate = {
    isLoading: false,
    isError: false,
    jokeItem: [],
}


export const reducer = ( state = initialstate, { type, payload }) => {

    switch (type) {

        case JOKEITEM_REQUEST_PENDING:
            return {
                isLoading: true,
                isError: false,

            }
        case JOKEITEM_FAILURE:
            return {
                isLoading: false,
                isError: true,

            }

        case JOKEITEM_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                jokeItem: payload,

            }

        default:
            return state


    }

}

