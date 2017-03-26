import { UPDATE_COUNTER } from '../actions/const';


export default function( state={ counter : 0 }, action ) {
    switch(action.type) {
        case UPDATE_COUNTER: {
            return { ...state, counter : state.counter + action.paramter }
        }
    }   
    return state;
}


