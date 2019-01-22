import React from 'react' ;
import Progress from './progress' ;
import { Link } from 'react-router-dom' ;
import './player.less' ;

let duration ;
const repeatTypes = ['cycle', 'random', 'once'] ;
class Player extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            progress: 0,
            volume: 0,
            leftTIme: 0
        } ;

        this.playOrPause = this.playOrPause.bind(this) ;
        this.changeMusicItem = this.changeMusicItem.bind(this) ;
        this.changeRepeat = this.changeRepeat.bind(this) ;
    }

    componentDidMount(){
        const { currentMusic } = this.props ;
        $('#player').jPlayer({
            ready: function(){
                $(this).jPlayer('setMedia', {
                    mp3: currentMusic.file
                })
            },
            supplied: 'mp3',
            wmode: 'window'
        }) ;
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration ;
            this.setState({
                volume: e.jPlayer.options.volume * 100,
                progress: e.jPlayer.status.currentPercentAbsolute,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            }) ;
        }) ;
        $('#player').bind($.jPlayer.event.ended, (e) => {
            this.changeMusicItem('next') ;
        }) ;
    }

    componentWillUnmount(){
        $('#player').unbind($.jPlayer.event.timeupdate) ;
        $('#player').unbind($.jPlayer.event.ended) ;
    }

    formatTime(time) {
        time = Math.floor(time);
        let miniute = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        return miniute + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }

    progressChangeHandler(progress){
        $('#player').jPlayer('play', duration * progress) ;
    }

    changeVolumeHandler(progress){
        $('#player').jPlayer('volume', progress) ;
    }

    changeMusicItem(type = 'next'){
        const { repeatType, currentMusic, musicList, changeMusic } = this.props ;
        let newIndex ;
        let index = musicList.indexOf(currentMusic) ;
        const musicListLen = musicList.length ;
        if(repeatType === repeatTypes[0]){
            if(type === 'next') {
                newIndex = (index + 1) % musicListLen ;
            } else {
                newIndex = (index - 1 + musicListLen) % musicListLen ;
            }
        } else if(repeatType === repeatTypes[1]){
            newIndex = Math.floor(Math.random() * musicListLen) ;
        } else {
            newIndex = index ;
        }

        $('#player').jPlayer('setMedia', {
            mp3: musicList[newIndex].file
        }).jPlayer('play') ;

        changeMusic(musicList[newIndex].id) ;
    }

    playOrPause(){
        if(this.props.isPlay){
            $('#player').jPlayer('pause') ;
        } else {
            $('#player').jPlayer('play') ;
        }

        this.props.playOrPauseMusic() ;
    }

    changeRepeat() {
        const { repeatType, changeRepeatType } = this.props ;
        let index = repeatTypes.indexOf(repeatType) ;
        console.log(index) ;
        index = (index + 1) % repeatTypes.length ;
        console.log(repeatTypes[index]) ;
        changeRepeatType(repeatTypes[index]) ;
    }

    render(){
        const { currentMusic, isPlay, repeatType } = this.props ;
        return (
            <div className="player-page">
                <h1 className="caption"><Link to='/list'>我的私人音乐坊 &gt;</Link></h1>
                {/*<h1 className="caption">我的私人音乐坊 &gt;</h1>*/}
                <div className="mt20 row">
                    <div className="controll-wrapper">
                        <h2 className="music-title">{currentMusic.title}</h2>
                        <h3 className="music-artist mt10">{currentMusic.artist}</h3>
                        <div className="row mt20">
                            <div className="left-time -col-auto">-{this.state.leftTime}</div>
                            <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.changeVolumeHandler}
                                        barColor='#aaa'
                                    >
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div style={{height: 10, lineHeight: '10px', marginTop: '10px'}}>
                            <Progress
                                progress={this.state.progress}
                                onProgressChange={this.progressChangeHandler}
                            >
                            </Progress>
                        </div>
                        <div className="mt35 row">
                            <div>
                                <i className="icon prev" onClick={() => this.changeMusicItem('prev')}></i>
                                <i className={`icon ml20 ${isPlay ? 'pause' : 'play'}`} onClick={this.playOrPause}></i>
                                <i className="icon next ml20" onClick={() => this.changeMusicItem('next')}></i>
                            </div>
                            <div className="-col-auto">
                                <i className={`icon repeat-${repeatType}`} onClick={this.changeRepeat}></i>
                            </div>
                        </div>
                    </div>
                    <div className="-col-auto cover">
                        <img src={currentMusic.cover} alt={currentMusic.title}/>
                    </div>
                </div>
            </div>
        ) ;
    }
}


export default Player ;