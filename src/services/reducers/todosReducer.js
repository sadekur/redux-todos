import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constans/todosConstant";

const initialState = {
    todos: [],
    isLoading: false,
    error: null
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;    
    }

}

export default todosReducer;