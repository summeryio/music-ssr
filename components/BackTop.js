import React, { Component, Fragment } from 'react'

export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backTopShow: false
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true)
    }

    handleScroll() {
        let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        if (top > 300) {
            this.setState({
                backTopShow: true
            })
        } else {
            this.setState({
                backTopShow: false
            })
        }
    }
    
    handleBackTop() {
        document.documentElement.scrollTop = 0
    }
  
    render() {
        let {backTopShow} = this.state

        return (
            <div id="back_top" className={backTopShow ? 'show' : ''} onClick={this.handleBackTop}><i className="iconfont icon-yooxi"></i></div>
        )
    }
}