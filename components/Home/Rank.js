import React, { Component } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';


import { connect } from 'react-redux';
import { fetchRank } from '../../redux/actions/home';

import HomeModule from './HomeModule'
import Loading from '../Loading'
import Img from '../Img'

class Rank extends Component {
    constructor(props) {
        super(props);

        let {rank} = props
        
        this.state = {
          rankData: rank,
        }
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.rank && nextProps.rank !== prevState.rankData) {
            return {
                rankData: nextProps.rank
            };
        }
        
        return null; 
    }

    componentDidMount() {
        if(this.props.isServer) {
            this.props.fetchRank()
        }
    }
    
    render () {
        let {rankData} = this.state

        return (
            <HomeModule {...{
                id: 'rank',
                nav: 'rank'
            }}>
                {
                    rankData.length ? (
                        <ul className="list">
                        {
                            rankData.map(rank => {
                                return (
                                    <li key={rank.id}><Link href={{ pathname: '/detail/playlist', query: { id: rank.id } }}><a>
                                        <Img 
                                            {...{
                                                url: rank.coverImgUrl,
                                                size: 200,
                                            }}
                                        />
                                        <p>{rank.name}</p>
                                        <i className="iconfont icon-right"></i>
                                    </a></Link></li>
                                )
                            })
                        }
                    </ul>
                    ) : <Loading full={true}/>
                }
            </HomeModule>
        )
    }
    
};

const mapStateToProps = state => ({
    rank: state.home.rank.ranks,
});
  
const mapDispatchToProps = dispatch => ({
    fetchRank() {
      dispatch(fetchRank());
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Rank);
  