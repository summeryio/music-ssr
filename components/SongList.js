import React, { Component } from 'react'
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Img from './Img'

export default class SongList extends Component {
    render() {
        let {songs} = this.props

        return (
            <ul className="song-list">
                {
                    songs.map((song) => {
                        let info = song.ar.map((artist, a) => {
                            return `${artist.name}${a === song.ar.length - 1 ? '' : '/'}`
                        })
                        
                        return (
                            <li key={song.id}>
                                <Link href={`/player/${song.id}`}>
                                    <a className="name">
                                        {song.name} {song.alia}
                                        <p>{info} - {song.al.name}</p>
                                    </a>
                                </Link>
                                <LazyLoad height='100%' once placeholder={<img src="/static/images/img_default.svg" />}>
                                    <Img imgUrl={song.al.picUrl + '?param=200y200'}/>
                                </LazyLoad>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
