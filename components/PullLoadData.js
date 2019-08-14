import React, { Component } from 'react'
import Loading from './Loading'
import { withRouter } from 'next/router'

class PullLoadData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            isFoot: true,
            len: 0
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.len && nextProps.len !== prevState.len) {
            return {
                len: nextProps.len,
                isFoot: true
            };
        }
        
        return null; 
    }

    
    //接触屏幕
    touchStart(e) {
        this.startx = e.touches[0].pageX;
        this.starty = e.touches[0].pageY;
    }
    //离开屏幕（[e.changedTouches][2]）
    touchEnd(e) {
        let endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        let direction = this.getDirection(this.startx, this.starty, endx, endy);
        switch (direction) {
            case 0:
                // console.log("未滑动！");
                break;
            case 1:
                // console.log("向上！");
                this.loadData();
                break;
            case 2:
                // console.log("向下！");
                break;
            case 3:
                // console.log("向左！");
                break;
            case 4:
                // console.log("向右！");
                break;
            default:
        }
    }
    //触摸点和离开点连线与[x轴角度][3]
    getAngle(angx,angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    }
    //根据接触和离开判断方向 1向上 2向下 3向左 4向右 0未发生滑动（[Math.abs][4]）
    getDirection(startx, starty, endx, endy) {
        let angx = endx - startx;
        let angy = endy - starty;
        let result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
        let angle = this.getAngle(angx, angy);
        
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }

    loadData() {
        let {fetchData, router} = this.props
        
        let dataHeight = this.refs.onPullUp.clientHeight;
        let scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        let screenHeight = document.documentElement.clientHeight;
        const h = 10;//自定义距离底部多少时concat数据
        if (dataHeight - scrollHeight - h < screenHeight && this.state.isFoot) {
            this.setState({
                isFoot: false,
                page: this.state.page + 1
            }, () => {
                if (router.pathname === '/list/singer') {
                    fetchData(this.state.page, router.query.id)    
                } {
                    fetchData(this.state.page)
                }
            });
        }
    }
    
    render() {
        let {more, len, children} = this.props
        
        return (
            <div className="scroll_wrapper" ref="onPullUp" onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
                {children}
                {
                    len ?

                    more ? (
                        len && this.state.isFoot ? <p className="scroll-tip">上拉加载更多</p> : <Loading />
                    ) : (
                        <p className="scroll-tip">我是有底线的</p>
                    )

                    : null
                }
            </div>
        )
    }
}


export default withRouter(PullLoadData)