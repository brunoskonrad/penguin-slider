import React from 'react';
import Navigation from './navigation.jsx';
import Carousel from './carousel.jsx';

class Slider extends React.Component {
  render() {
    return (
      <div>
        <Navigation tabs={this.props.tabs} />
        <Carousel>
          {this.props.children}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
