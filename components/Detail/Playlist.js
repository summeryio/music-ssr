import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import { fetchDetailPlaylist, fetchDetailPlaylistComment } from '../../redux/actions/detail';
import LazyLoad from 'react-lazyload';

import {formatDateYMD} from '../../core/util'
import Header from '../Header'
import Img from '../Img'
import SongList from '../SongList'
import Comment from '../Comment'

class Playlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playlistData: props.playlist,
            commentData: props.comment
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
            return {
                playlistData: nextProps.playlist
            };
        }

        if (nextProps.comment && nextProps.comment !== prevState.commentData) {
            return {
                commentData: nextProps.comment
            };
        }
        
        return null; 
    }

    componentDidMount() {
        const { router: { query } } = this.props;
        
        if (this.props.isServer) {
            fetchDetailPlaylist(query.id)
            fetchDetailPlaylistComment(query.id)
        }
    }
    
    render() {
        let {playlistData, commentData} = this.state
        let creator = playlistData.creator || {}
        let playCount = playlistData.playCount > 100000 ? parseInt(playlistData.playCount / 10000) + '万' : parseInt(playlistData.playCount)

        return (
            <div id="playlist_detail">
                <Header title=""/>
                <div className="header">
                    <div className="bg" style={{backgroundImage: `url(${playlistData.coverImgUrl + '?param=400y400'})`}}></div>
                    <div className="cont">
                        <div className="pic">
                            <Img 
                                {...{
                                    url: playlistData.coverImgUrl,
                                    size: 400,
                                }}
                            />
                            <span className="count">
                                <i className="iconfont icon-earphonee"></i>
                                <em>{playCount || null}</em>
                            </span>
                            <i className="icon-cat">歌单</i>
                        </div>
                        <div className="info">
                            <p className="t">{playlistData.name}</p>
                            <div className="u-img">
                                <Img 
                                    {...{
                                        url: creator.avatarUrl,
                                        size: 60,
                                    }}
                                />
                                {creator.nickname}
                            </div>
                            {/* <p>创建时间：{formatDateYMD(playlistData.createTime)}</p> */}
                        </div>
                    </div>
                    {/* <PlayAll songs={playlistData.tracks} /> */}
                </div>
                <SongList songs={playlistData.tracks} />
                <Comment {...{
                    data: commentData
                }} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    playlist: state.detail.playlist.playlists,
    comment: state.detail.comment.comments,
    more:  state.detail.comment.more
});
  
const mapDispatchToProps = dispatch => ({
    fetchDetailPlaylist(id) {
      dispatch(fetchDetailPlaylist(id));
    },

    fetchDetailPlaylistComment(id) {
        dispatch(fetchDetailPlaylistComment(id));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Playlist));