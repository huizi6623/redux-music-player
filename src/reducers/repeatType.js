import { actionsName} from "../actions";

const repeatType = (state = 'cycle', action) => {
    switch(action.type){
        case actionsName.CHANGE_REPEAT_TYPE:
            return action.repeatType ;
        default:
            return state ;
    }
} ;

export default repeatType ;
