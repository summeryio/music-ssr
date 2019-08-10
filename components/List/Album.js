import React, { Component } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { fetchListAlbum } from '../../redux/actions/list';

import Header from '../Header'
import Loading from '../Loading'
import Img from '../Img'
import PullLoadData from '../PullLoadData'

class Album extends Component {
    constructor(props) {
        super(props);

        let {album} = props
        
        this.state = {
            albumData: album,
            more: true
        }
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.album && nextProps.album !== prevState.albumData) {
            return {
                albumData: nextProps.album,
                more: nextProps.more
            };
        }
        
        return null; 
    }

    componentDidMount() {
        if(this.props.isServer) {
            this.props.fetchListAlbum(0)
        }
    }
    
    render () {
        let {albumData, more} = this.state

        return (
            <div id="album">
                <Header title="新碟上架" />
                <PullLoadData
                    {...{
                        fetchData: this.props.fetchListAlbum,
                        len: albumData.length,
                        more
                    }}
                >
                    <ul className="list m-music__list">
                        {
                            albumData.map((play, i) => {
                                return (
                                    <li key={play.id}>
                                        <div className="pic">
                                            <Img 
                                                {...{
                                                    url: play.picUrl,
                                                    size: 400,
                                                }}
                                            />
                                        </div>
                                        <p className="desc">{play.name}</p>
                                        <Link href={{ pathname: '/detail/album', query: { id: play.id } }}>
                                            <a className="link"></a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </PullLoadData>
            </div>
        )
    }
    
};

const mapStateToProps = state => ({
    album: state.list.album.albums,
    more:  state.list.album.more
});
  
const mapDispatchToProps = dispatch => ({
    fetchListAlbum(page) {
      dispatch(fetchListAlbum(page));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Album);
  