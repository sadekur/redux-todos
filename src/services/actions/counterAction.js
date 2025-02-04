import { DECREMENT, INCREMENT, RESET } from "../constans/counterConstant";

const incrementCounter = () => ({
    type: INCREMENT,
});
const decrementCounter = () => ({
    type: DECREMENT,
});
const resetCounter = () => ({
    type: RESET,
});
export { incrementCounter, decrementCounter, resetCounter };