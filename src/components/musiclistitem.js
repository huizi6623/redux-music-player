import React from 'react' ;
import './musiclistitem.less' ;
import { Link } from 'react-router-dom' ;

class MusicListItem extends React.Component{
    constructor(props){
        super(props) ;
        this.playMusic = this.playMusic.bind(this) ;
        this.deleteMusic = this.deleteMusic.bind(this) ;
    }

    playMusic(){
        this.props.changeMusic() ;
        this.props.playMusic() ;
        $('#player').jPlayer('setMedia', {
            mp3: this.props.musicItem.file
        }).jPlayer('play') ;
    }

    deleteMusic(e){
        e.stopPropagation() ;
        this.props.deleteMusicItem() ;
    }

    render(){
        let { musicItem, focus } = this.props ;
        return(
            <li
                onClick={() => this.playMusic()}
                className={`components-listitem row ${focus ? "focus" : "" }`}
            >
                <Link to={'/'}>
                    <span><strong>{musicItem.title}</strong> - {musicItem.artist}</span>
                </Link>
                <span onClick={e => this.deleteMusic(e)} className='-col-auto delete'></span>
            </li>
        );
    }
}

export default MusicListItem ;