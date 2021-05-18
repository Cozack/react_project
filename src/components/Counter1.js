import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
export const store = createStore(reducer);
const counter1 = ()=>{
    const counter = useSelector((state) => state.counter)

    return(
        <h1>Counter: {counter}</h1>
    )
}
export default function Counter ()  {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch({type:'INC'})
                }}>

            </button>
            <button
                onClick={() => {
                    dispatch({type: 'INC_HUNDRED'})
                }}>

            </button>
            <button
                onClick={() => {
                    dispatch({type:'DEC'})
                }}>

            </button>
            <button
                onClick={() => {
                    dispatch({type: 'DEC_HUNDRED'})
                }}>

            </button>

            <button
                onClick={() => {
                    dispatch({type:'RESET'})
                }}>

            </button>
        </div>
    );
}
