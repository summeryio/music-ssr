import React, { Component } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import { fetchDetailAlbum } from '../../redux/actions/detail';

import {formatDateYMD} from '../../core/util'
import Header from '../Header'
import Loading from '../Loading'
import Img from '../Img'
import SongList from '../SongList'

class Album extends Component {
    constructor(props) {
        super(props)
        
        // const { router: { query } } = props;

        this.state = {
            albumData: {}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.album && nextProps.album !== prevState.albumData) {
            return {
                albumData: nextProps.album
            };
        }
        
        return null; 
    }

    componentDidMount() {
        const { router: { query } } = this.props;
        
        fetchDetailAlbum(query.id)
    }
    
    render() {
        let {albumData} = this.state
        let album = Object.keys(albumData).length ? albumData.album : {}
        
        return (
            <div id="album_detail">
                <Header title=""/>
                {
                    Object.keys(albumData).length ? (
                        <div>
                            <div className="header">
                                <div className="bg" style={{backgroundImage: `url(${album.picUrl})`}}></div>
                                <div className="cont">
                                    <img src={album.picUrl + '?param=400y400'} />
                                    <div className="info">
                                        <p>{album.name}</p>
                                        {album.company ? <p>发行公司：{album.company}</p> : null}
                                        <p>创建时间：{formatDateYMD(album.createTime)}</p>
                                    </div>
                                </div>
                            </div>
                            <SongList songs={albumData.songs} />
                         </div>
                    ) : <Loading full={true}/>
                }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    album: state.detail.album.albums
});
  
const mapDispatchToProps = dispatch => ({
    fetchDetailAlbum(id) {
      dispatch(fetchDetailAlbum(id));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Album));