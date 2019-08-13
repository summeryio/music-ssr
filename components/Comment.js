import React, { Component, Fragment } from 'react'
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';

import {formatDateYMD} from '../core/util'
import Loading from './Loading'
import Img from './Img'
import PullLoadData from './PullLoadData'

class Comment extends Component {
    render() {
        let {data} = this.props
        
        return (
            <div id="comment">
                {
                    Object.keys(data).length ? (
                        <Fragment>
                            {
                                data.hotComments.length ? (
                                    <Fragment>
                                        <h6 className="t">精彩评论</h6>
                                        <ul>
                                            {
                                                data.hotComments.map(comment => (
                                                    <li key={comment.commentId}>
                                                        <div className="pic">
                                                            <Img 
                                                                {...{
                                                                    url: comment.user.avatarUrl,
                                                                    size: 60,
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="intro">
                                                            <div className="top">
                                                                <a href="/" className="name">{comment.user.nickname}</a>
                                                                <p className="time">{formatDateYMD(comment.time)}</p>
                                                                <p className="like">
                                                                    <span>{comment.likedCount}</span>
                                                                    <i className="iconfont icon-like"></i>
                                                                </p>
                                                            </div>
                                                            {
                                                                Object.keys(comment.beReplied).length ? (
                                                                    <div className="replied">
                                                                        <p className="self">
                                                                            回复
                                                                            <a href="/">@{comment.beReplied[0].user.nickname}</a>：
                                                                            {comment.content}
                                                                        </p>
                                                                        {
                                                                            comment.beReplied[0].content ? (
                                                                                <p className="to">@{comment.beReplied[0].user.nickname}：{comment.beReplied[0].content}</p>
                                                                            ) : (
                                                                                <p className="to">该评论已删除</p>
                                                                            )
                                                                        }
                                                                        
                                                                    </div>
                                                                ) : (
                                                                    <p className="cont">{comment.content}</p>
                                                                )
                                                            }
                                                            
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Fragment>
                                ) : null
                            }
                            {
                                data.comments.length && (
                                    <Fragment>
                                        <h6 className="t">最新评论</h6>
                                        <ul>
                                            {
                                                data.comments.map(comment => (
                                                    <li key={comment.commentId}>
                                                        <div className="pic">
                                                            <Img 
                                                                {...{
                                                                    url: comment.user.avatarUrl,
                                                                    size: 60,
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="intro">
                                                            <div className="top">
                                                                <a href="/" className="name">{comment.user.nickname}</a>
                                                                <p className="time">{formatDateYMD(comment.time)}</p>
                                                                <p className="like">
                                                                    <span>{comment.likedCount}</span>
                                                                    <i className="iconfont icon-like"></i>
                                                                </p>
                                                            </div>
                                                            {
                                                                Object.keys(comment.beReplied).length ? (
                                                                    <div className="replied">
                                                                        <p className="self">
                                                                            回复
                                                                            <a href="/">@{comment.beReplied[0].user.nickname}</a>：
                                                                            {comment.content}
                                                                        </p>
                                                                        {
                                                                            comment.beReplied[0].content ? (
                                                                                <p className="to">@{comment.beReplied[0].user.nickname}：{comment.beReplied[0].content}</p>
                                                                            ) : (
                                                                                <p className="to">该评论已删除</p>
                                                                            )
                                                                        }
                                                                        
                                                                    </div>
                                                                ) : (
                                                                    <p className="cont">{comment.content}</p>
                                                                )
                                                            }
                                                            
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </Fragment>
                                )
                            }
                        </Fragment>
                    ) : null
                }
            </div>
        )
    }
}
  
export default Comment