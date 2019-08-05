import React, { Component } from 'react'
import Link from 'next/link';

export default class HomeModule extends Component {
    render() {
        let {id, nav, children} = this.props
        
        return (
            <div id={id}>
                <div id="home_header">
                    {/* <img src='static/images/logo.png' /> */}
                    {/* <Link href={currentID ? `/player/${currentID}` : '/'}><i className="go-player"></i></Link> */}
                </div>
                <ul id="home_nav">
                    <li className={nav === 'recommend' ? 'active' : ''}><Link href="/home/recommend"><a>个性推荐</a></Link></li>
                    <li className={nav === 'song' ? 'active' : ''}><Link href="/home/newsong"><a>新歌</a></Link></li>
                    <li className={nav === 'rank' ? 'active' : ''}><Link href="/home/rank"><a>排行榜</a></Link></li>
                    <li className={nav === 'singer' ? 'active' : ''}><Link href="/home/singer"><a>歌手</a></Link></li>
                </ul>
                {children}
            </div>
        )
    }
}