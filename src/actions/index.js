export const actionsName = {
    DELETE_MUSIC_ITEM: 'DELETE_MUSIC_ITEM',
    CHANGE_MUSIC: 'CHANGE_MUSIC',
    PLAY_OR_PAUSE_MUSIC: 'PLAY_OR_PAUSE_MUSIC',
    PLAY_MUSIC: 'PLAY_MUSIC',
    CHANGE_REPEAT_TYPE: 'CHANGE_REPEAT_TYPE'
} ;

/**
 * 删除歌曲action
 * @param id 要删除的歌曲id
 * @returns {{type: string, id: *}}
 */
export const deleteMusicItem = (id) => ({
    type: actionsName.DELETE_MUSIC_ITEM,
    id
}) ;

/**
 * 更改播放歌曲action
 * @param id 要更换播放的歌曲id
 * @returns {{type: string, id: *}}
 */
export const changeMusic = (id) => ({
    type: actionsName.CHANGE_MUSIC,
    id
}) ;

/**
 * 播放或暂停音乐action
 * @param isPlay 音乐是否播放
 * @returns {{type: string, isPlay: *}}
 */
export const playOrPauseMusic = () => ({
    type: actionsName.PLAY_OR_PAUSE_MUSIC,
}) ;

export const playMusic = () => ({
    type: actionsName.PLAY_MUSIC
}) ;

/**
 * 更改循环模式action
 * @param repeteType 当前的循环模式
 * @returns {{type: string, repeteType: *}}
 */
export const changeRepeatType = (repeatType) => ({
    type: actionsName.CHANGE_REPEAT_TYPE,
    repeatType
}) ;


