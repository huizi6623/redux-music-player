import { MUSIC_LIST } from "../config/musicList";
import { actionsName } from "../actions";

const musicList = (state = MUSIC_LIST, action) => {
    switch (action.type) {
        case actionsName.DELETE_MUSIC_ITEM:
            return state.filter(musicItem =>
                musicItem.id !== action.id
            ) ;
        default:
            return state ;
    }
} ;

export default musicList ;