import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import { fetchDetailPlaylist } from '../../redux/actions/detail';

import {formatDateYMD} from '../../core/util'
import Header from '../Header'
import Loading from '../Loading'
import SongList from '../SongList'

class Playlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playlistData: props.playlist
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
            return {
                playlistData: nextProps.playlist
            };
        }
        
        return null; 
    }

    componentDidMount() {
        const { router: { query } } = this.props;
        
        if (this.props.isServer) {
            fetchDetailPlaylist(query.id)
        }
    }
    
    render() {
        let {playlistData} = this.state
        let creator = playlistData.creator || {}
        console.log(creator.avatarUrl);
        
        return (
            <div id="playlist_detail">
                <Header title=""/>
                {
                    Object.keys(playlistData).length ? (
                        <div>
                            <div className="header">
                                <div className="bg" style={{backgroundImage: `url(${playlistData.coverImgUrl + '?param=400y400'})`}}></div>
                                <div className="cont">
                                    <div className="pic">
                                        <img src={playlistData.coverImgUrl + '?param=400y400'} />
                                        <span className="count">
                                            <i className="iconfont icon-earphonee"></i>
                                            <em>55万</em>
                                        </span>
                                        <i className="icon-cat">歌单</i>
                                    </div>
                                    <div className="info">
                                        <p className="t">{playlistData.name}</p>
                                        <p className="u-img">
                                            <img src={creator.avatarUrl + '?param=60y60'} />{creator.nickname}
                                        </p>
                                        {/* <p>创建时间：{formatDateYMD(playlistData.createTime)}</p> */}
                                    </div>
                                </div>
                                {/* <PlayAll songs={playlistData.tracks} /> */}
                            </div>
                            <SongList songs={playlistData.tracks} />
                         </div>
                    ) : <Loading full={true}/>
                }
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    playlist: state.detail.playlist.playlists
});
  
const mapDispatchToProps = dispatch => ({
    fetchDetailPlaylist(id) {
      dispatch(fetchDetailPlaylist(id));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Playlist));