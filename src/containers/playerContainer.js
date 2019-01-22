import { connect } from 'react-redux' ;
import Player from '../components/player' ;
import {
    changeMusic,
    changeRepeatType,
    playOrPauseMusic
} from "../actions";

const mapStateToProps = (state) => ({
    musicList: state.musicList,
    currentMusic: state.musicList.filter(item =>
        item.id === state.currentMusic
    )[0],
    isPlay: state.isPlay,
    repeatType: state.repeatType
}) ;

const mapDispatchToProps = (dispatch) => ({
    changeMusic: (id) => dispatch(changeMusic(id)),
    changeRepeatType: (repeatType) => dispatch(changeRepeatType(repeatType)),
    playOrPauseMusic: () => dispatch(playOrPauseMusic())
}) ;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player) ;
