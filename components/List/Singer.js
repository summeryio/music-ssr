import React, { Component } from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { fetchListSinger } from '../../redux/actions/list';

import Header from '../Header'
import Loading from '../Loading'
import Img from '../Img'
import PullLoadData from '../PullLoadData'

class Singer extends Component {
    constructor(props) {
        super(props);

        let {singer} = props
        
        this.state = {
            singerData: singer,
            more: true
        }
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.singer && nextProps.singer !== prevState.singerData) {
            return {
                singerData: nextProps.singer,
                more: nextProps.more
            };
        }
        
        return null; 
    }

    componentDidMount() {
        let { router: { query } } = this.props;

        if(this.props.isServer) {
            this.props.fetchListSinger(0, query.id)
        }
    }
    
    render () {
        let {singerData, more} = this.state
        let { router: { query } } = this.props;

        return (
            <div id="singer_list">
                <Header title={query.title} />
                <PullLoadData
                    {...{
                        fetchData: this.props.fetchListSinger,
                        len: singerData.length,
                        more
                    }}
                >
                    <ul className="list">
                        {
                            singerData.length ? singerData.map((play, i) => {
                                return (
                                    <li key={i}><Link href={`/singer-detail/${play.id}`}><a>
                                        <Img 
                                            {...{
                                                url: play.picUrl,
                                                size: 200,
                                            }}
                                        />
                                        <span>{play.name}</span>
                                        <i className="icon-keyboard_arrow_right"></i>
                                    </a></Link></li>
                                )
                            }) : <Loading />
                        }
                    </ul>
                </PullLoadData>
                
            </div>
        )
    }
    
};

const mapStateToProps = state => ({
    singer: state.list.singer.singers,
    more:  state.list.singer.more
});
  
const mapDispatchToProps = dispatch => ({
    fetchListSinger(page, singerId) {
      dispatch(fetchListSinger(page, singerId));
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Singer));
  