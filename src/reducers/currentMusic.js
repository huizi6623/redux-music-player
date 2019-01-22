import { actionsName } from "../actions";
import { MUSIC_LIST } from "../config/musicList";

const currentMusic = (state = MUSIC_LIST[0].id, action) => {
    switch (action.type){
        case actionsName.CHANGE_MUSIC:
            return action.id ;
        default:
            return state ;
    }
} ;

export default currentMusic ;