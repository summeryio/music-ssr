import React from 'react';

class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgUrl: this.props.imgUrl
        };
    }

    handleImageLoaded() {
     
    }

    handleImageErrored() {
        this.setState({ 
            imgUrl: '/static/images/img_default.svg'
        });
    }

    render() {
        return (
            <img
                src={this.state.imgUrl}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
            />
        );
    }
}
export default Img;