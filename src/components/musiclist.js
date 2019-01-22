import React from 'react' ;
import MusicListItem from './musiclistitem' ;

class MusicList extends React.Component{
    render(){
        let listEle = null ;
        const { musicList, currentMusic, changeMusic, deleteMusicItem, playMusic } = this.props ;
        listEle = musicList.map((item) => {
            return (
                <MusicListItem
                    focus={item === currentMusic}
                    key={item.id}
                    musicItem={item}
                    changeMusic={() => changeMusic(item.id)}
                    deleteMusicItem={() => deleteMusicItem(item.id)}
                    playMusic={playMusic}
                >
                    {item.title}
                </MusicListItem>
            ) ;
        }) ;
        return(
            <ul>
                {listEle}
            </ul>
        ) ;
    }
}

export default MusicList ;