import {actionsName } from "../actions";

const isPlay = (isPlay = false, action) => {
    switch (action.type){
        case actionsName.PLAY_OR_PAUSE_MUSIC:
            return ! isPlay ;
        case actionsName.PLAY_MUSIC:
            return true ;
        default:
            return isPlay ;
    }
} ;

export default isPlay ;