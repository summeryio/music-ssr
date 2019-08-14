import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux';
import { fetchHomeBanner, fetchHomePlaylist, fetchHomeAlbum } from '../../redux/actions/home';

import HomeModule from './HomeModule'
import Loading from '../Loading'
import Img from '../Img'


class Home extends Component {
    constructor(props) {
        super(props);

        let {banner, playlist, album} = props
        
        this.state = {
          bannerData: banner,
          playlistData: playlist,
          albumData: album,
        }

        this.swiper = null
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.banner && nextProps.banner !== prevState.bannerData) {
            return {
                bannerData: nextProps.banner
            };
        }

        if (nextProps.playlist && nextProps.playlist !== prevState.playlistData) {
            return {
                playlistData: nextProps.playlist
            };
        }

        if (nextProps.album && nextProps.album !== prevState.albumData) {
            return {
                albumData: nextProps.album
            };
        }
        
        return null; 
    }

    componentDidUpdate() {
        this.swiper.update()
    }

    componentDidMount() {
        if(this.props.isServer) {
            this.props.fetchHomeBanner()
            this.props.fetchHomePlaylist()
            this.props.fetchHomeAlbum()
        }

        this.swiper = new Swiper('.swiper-container', {
            resistanceRatio: 0,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    
    render () {
        let {bannerData, playlistData, albumData} = this.state

        return (
            <HomeModule {...{
                id: 'home',
                nav: 'recommend'
            }}>
                <div className="banner swiper-container">
                    <div className="sliderWrap swiper-wrapper">
                        {
                            bannerData.map((banner, b) => {
                                let {imageUrl} = banner
                                
                                return (
                                    <Link href="/"  key={b}>
                                        <a className="swiper-slide"><img src={imageUrl && imageUrl + '?param=1024y400'} /></a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {
                    playlistData.length ? (
                        <Fragment>
                            <div className="playlist home-list">
                                <div className="title">
                                    <Link href="/list/playlist"><a>
                                        <span>推荐歌单</span>
                                        <i className="iconfont icon-right_"></i>
                                    </a></Link>
                                </div>
                                <ul className="list">
                                    {
                                        playlistData.map(play => {
                                            let playCount = play.playCount > 100000 ? parseInt(play.playCount / 10000) + '万' : parseInt(play.playCount)
                                            
                                            return (
                                                <li key={play.id}>
                                                    <a href={`/detail/playlist?id=${play.id}`}>
                                                        <div className="pic">
                                                            <Img 
                                                                {...{
                                                                    url: play.picUrl,
                                                                    size: 400,
                                                                }}
                                                            />
                                                            <span className="count">
                                                                <i className="iconfont icon-earphonee"></i>
                                                                <em>{playCount}</em>
                                                            </span>
                                                        </div>
                                                        <p className="desc">{play.name}</p>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="albumlist home-list">
                                <div className="title">
                                    <Link href="/list/album"><a>
                                        <span>新碟上架</span>
                                        <i className="iconfont icon-right_"></i>
                                    </a></Link>
                                </div>
                                <ul className="list">
                                    {
                                        albumData.map(play => {
                                            return (
                                                <li key={play.id}>
                                                    <Link prefetch href={{ pathname: '/detail/album', query: { id: play.id } }}><a>
                                                        <div className="pic">
                                                            <Img 
                                                                {...{
                                                                    url: play.picUrl,
                                                                    size: 400,
                                                                }}
                                                            />
                                                        </div>
                                                        <p className="desc">{play.name}</p>
                                                    </a></Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Fragment>
                    ) : <Loading />
                }
                
            </HomeModule>
        )
    }
    
};

const mapStateToProps = state => ({
    banner: state.home.banner.banners,
    playlist: state.home.playlist.playlists,
    album: state.home.album.albums,
});
  
const mapDispatchToProps = dispatch => ({
    fetchHomeBanner() {
      dispatch(fetchHomeBanner());
    },
  
    fetchHomePlaylist() {
      dispatch(fetchHomePlaylist());
    },
  
    fetchHomeAlbum() {
      dispatch(fetchHomeAlbum());
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
  