import React from 'react';
import LazyLoad from 'react-lazyload';

class Img extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            imgUrl: '/static/images/img_default.svg'
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.url && nextProps.url !== prevState.imgUrl) {
            return {
                imgUrl: nextProps.url + `?param=${nextProps.size}y${nextProps.size}`
            };
        }
        
        return null; 
    }

    handleImageLoaded() {}

    handleImageErrored() {
        this.setState({ 
            imgUrl: '/static/images/img_default.svg'
        });
    }

    render() {
        let {imgUrl} = this.state
        
        return (
            <LazyLoad once height="100%" placeholder={<img src="/static/images/img_default.svg" alt=""/>}>
                
                <img
                    src={imgUrl}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                />
            </LazyLoad>
        );
    }
}
export default Img;