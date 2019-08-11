import React, { Component } from 'react'
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { fetchCommonComment } from '../redux/actions/common';

import Loading from './Loading'
import Img from './Img'
import PullLoadData from './PullLoadData'

class Comment extends Component {
    componentDidMount() {
        fetchCommonComment(2890484841)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        
        return null; 
    }
    
    render() {
        return (
            <div id="comment">
                <h6 className="t">精彩评论</h6>
                <ul>
                    <li>
                        <div className="pic"><img src="https://p2.music.126.net/LV_gejukDUaZVDrhHNXZ6w==/109951164164207949.webp?imageView&amp;thumbnail=60x0&amp;quality=75&amp;tostatic=0&amp;type=webp" /></div>
                        <div className="intro">
                            <div className="top">
                                <a href="/" className="name">发蘪的葡萄干</a>
                                <p className="time">2019年7月20日</p>
                                <p className="like">
                                    <span>99</span>
                                    <i className="iconfont icon-like"></i>
                                </p>
                            </div>

                            {/* <p className="cont">为什么封面是菜小姐，若不是这封面各位怎么会相见呢</p> */}
                            <div className="replied">
                                <p className="self">回复<a href="/">@发蘪的葡萄干</a>：哈哈哈哈</p>
                                <p className="to">@发蘪的葡萄干为什么封面是菜小姐，若不是这封面各位怎么会相见呢</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comment: state.common.comment.comments,
    more:  state.common.comment.more
});
  
const mapDispatchToProps = dispatch => ({
    fetchCommonComment(id) {
      dispatch(fetchCommonComment(id));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Comment);