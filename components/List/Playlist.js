import React, { Component } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { fetchListPlaylist } from '../../redux/actions/list';

import Header from '../Header'
import Loading from '../Loading'
import Img from '../Img'
import PullLoadData from '../PullLoadData'

class Playlist extends Component {
    constructor(props) {
        super(props);

        let {playlist} = props
        
        this.state = {
            playlistData: playlist,
            more: true
        }
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
            return {
                playlistData: nextProps.playlist,
                more: nextProps.more
            };
        }
        
        return null; 
    }

    componentDidMount() {
        if(this.props.isServer) {
            this.props.fetchListPlaylist(0)
        }
    }
    
    render () {
        let {playlistData, more} = this.state

        return (
            <div id="playlist">
                <Header title="推荐歌单" />
                <PullLoadData
                    {...{
                        fetchData: this.props.fetchListPlaylist,
                        len: playlistData.length,
                        more
                    }}
                >
                    <ul className="list m-music__list">
                        {
                            playlistData.length ? playlistData.map((play, i) => {
                                return (
                                    <li key={play.id}>
                                        <div className="pic">
                                            <Img 
                                                {...{
                                                    url: play.coverImgUrl,
                                                    size: 400,
                                                }}
                                            />
                                        </div>
                                        <p className="desc">{play.name}</p>
                                        <Link href={{ pathname: '/detail/playlist', query: { id: play.id } }}>
                                            <a className="link"></a>
                                        </Link>
                                    </li>
                                )
                            }) : <Loading />
                        }
                    </ul>
                </PullLoadData>
            </div>
        )
    }
    
};

const mapStateToProps = state => ({
    playlist: state.list.playlist.playlists,
    more:  state.list.playlist.more
});
  
const mapDispatchToProps = dispatch => ({
    fetchListPlaylist(page) {
      dispatch(fetchListPlaylist(page));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
  