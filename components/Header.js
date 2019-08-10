import React, { Component } from 'react'
import Link from 'next/link';
import Router from 'next/router'

export default class Header extends Component {
    render() {
        let {title} = this.props
        
        return (
            <div id="header_title">
                <a onClick={() => {
                    Router.back()
                }}>
                    <i className="iconfont icon-left"></i>
                </a>
                <p>{title}</p>
                {/* <Link href="/"><a>
                    <i className="iconfont icon-home"></i>
                </a></Link> */}
                <a href="/"><i className="iconfont icon-home"></i></a>
            </div>
        )
    }
}