



const initialState = {
    counter:0
}

const   counter = (state = initialState, action)=>{
    switch (action.type){
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case "INC_HUNDRED": {
            return {
                ...state,
                counter: state.counter + 100
            }
        }

        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }

        case "DEC_HUNDRED":
        {
            return {
                ...state,
                counter: state.counter - 100
            }
        }
        case "Reset":
        {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
    }
    }