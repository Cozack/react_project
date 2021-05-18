// npm i react-redux
// npm i redux
import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import AppTest from './AppTest';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    counter:0
}



const   reducer = (state = initialState,action)=>{
    switch (action.type){
        case "INC_CUSTOM"{
            return{
                ...state,
                counter: state.counter + action.payload
        }
    }
    case "INC"{
            return{
                ...state,
                counter: state.counter +1
        }
    }
        case "DEC"
        {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "Reset"
        {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
}


const store = createStore(reducer);


<Provider store={store}>
    <AppTest/>
<Provider/>

    //
    // store.subscribe()=>{
    // console.log('here', store.getState())}
    // }
    //
    // store.dispatch({type:'INC'}/*<-----ACTION*/)