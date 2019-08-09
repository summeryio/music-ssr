import React, { Component } from 'react';
import HomeModule from './HomeModule'
import Loading from '../Loading'
import SongList from '../SongList'

import { connect } from 'react-redux';
import { fetchNewsong } from '../../redux/actions/home';

class Newsong extends Component {
    constructor(props) {
        super(props);

        let {newsong} = props
        
        this.state = {
          newsongData: newsong,
        }
    }
      
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.newsong && nextProps.newsong !== prevState.newsongData) {
            return {
                newsongData: nextProps.newsong
            };
        }
        
        return null; 
    }

    componentDidMount() {
        if(this.props.isServer) {
            this.props.fetchNewsong()
        }
    }
    
    render () {
        let {newsongData} = this.state

        return (
            <HomeModule {...{
                id: 'new_song',
                nav: 'song'
            }}>
                <SongList songs={newsongData} />
            </HomeModule>
        )
    }
    
};

const mapStateToProps = state => ({
    newsong: state.home.newsong.newsongs,
});
  
const mapDispatchToProps = dispatch => ({
    fetchNewsong() {
      dispatch(fetchNewsong());
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Newsong);
  