import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constans/todosConstant";
import axios from "axios";

const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: GET_TODOS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_TODOS_FAILURE, payload: error.message });
    }
};

export default getAllTodos;