import { connect } from 'react-redux' ;
import MusicList from '../components/musiclist' ;
import {changeMusic, deleteMusicItem, playMusic} from "../actions";

const mapStateToprops = (state) => ({
    musicList: state.musicList,
    currentMusic: state.musicList.filter(item =>
        item.id === state.currentMusic
    )[0],
});

const mapDispatchToProps = (dispatch) => ({
    changeMusic: (id) => dispatch(changeMusic(id)),
    deleteMusicItem: (id) => dispatch(deleteMusicItem(id)),
    playMusic: () => dispatch(playMusic())
}) ;

export default connect(
    mapStateToprops,
    mapDispatchToProps
)(MusicList) ;