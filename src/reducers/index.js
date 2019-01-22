import { combineReducers } from 'redux' ;
import musicList from './musicList' ;
import currentMusic from './currentMusic' ;
import isPlay from './isPlay' ;
import repeatType from './repeatType' ;

export default combineReducers({
    musicList,
    currentMusic,
    isPlay,
    repeatType,
}) ;