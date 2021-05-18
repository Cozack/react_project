import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
const Counter = ()=>{
    const counter = useSelector((state) => state.counter)

    return(
        <h1>Counter: {Counter}</h1>
    )
}
export default function AppTest ()  {
    const dispatch = useDispatch();
    const [value,setValue] = React.useState(10)
        return (
            <div>
<Counter/>
                <input type="number" value={value} onChange={({target:{value}})=>{ setValue(value)
                }
                }/>
                <button
                    onClick={() => {
                        dispatch({type:'INC_CUSTOM', payload: Number(value)});
                    }}>

                </button>
                <button
                    onClick={() => {
                        dispatch({type:'INC'})
                    }}>

                </button>
                <button
                    onClick={() => {
                        dispatch({type:'DEC'})
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
