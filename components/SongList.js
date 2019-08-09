import React, { Component } from 'react'
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Img from './Img'
import Loading from './Loading'

export default class SongList extends Component {
    render() {
        let songs = this.props.songs || []

        return (
            <ul className="song-list">
                {
                    songs.length ? songs.map((song) => {
                        let info = song.ar.map((artist, a) => {
                            return `${artist.name}${a === song.ar.length - 1 ? '' : '/'}`
                        })
                        
                        return (
                            <li key={song.id}>
                                <div className="intro">
                                    <h6>{song.name} {song.alia}</h6>
                                    <p>{info} - {song.al.name}</p>
                                </div>
                                <div className="pic">
                                    <Img 
                                        {...{
                                            url: song.al.picUrl,
                                            size: 200,
                                        }}
                                    />
                                </div>
                                <Link href={`/player/${song.id}`}><a className="link"></a></Link>
                            </li>
                        )
                    }) : <Loading />
                }
            </ul>
        )
    }
}
