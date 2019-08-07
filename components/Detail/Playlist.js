import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import { fetchDetailPlaylist } from '../../redux/actions/detail';

import {formatDateYMD} from '../../core/util'
import Header from '../Header'
import Loading from '../Loading'
import Img from '../Img'
import SongList from '../SongList'

class Playlist extends Component {
    constructor(props) {
        super(props)
        
        // const { router: { query } } = props;

        this.state = {
            playlistData: {}
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
        
        fetchDetailPlaylist(query.id)
    }
    
    render() {
        let {playlistData} = this.state
        
        return (
            <div id="playlist_detail">
                <Header title=""/>
                {
                    Object.keys(playlistData).length ? (
                        <div>
                            <div className="header">
                                <div className="bg" style={{backgroundImage: `url(${playlistData.coverImgUrl + '?param=400y400'})`}}></div>
                                <div className="cont">
                                    <img src={playlistData.coverImgUrl + '?param=400y400'} />
                                    <div className="info">
                                        <p>{playlistData.name}</p>
                                        <p>{playlistData.creator.nickname}</p>
                                        <p>创建时间：{formatDateYMD(playlistData.createTime)}</p>
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