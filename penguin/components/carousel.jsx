import React from 'react';
import classNames from 'classnames';
import PenguinStore from '../store/penguin-store';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transform: 'translateX(0%)'
    };
  }
  tabChange(index) {
    this.setState({
      transform: `translateX(-${index * 100}%)`
    });
  }

  componentDidMount() {
    PenguinStore.addTabChangeListener(this.tabChange.bind(this));
  }

  componentWillUnmount() {
    PenguinStore.removeTabChangeListener(this.tabChange.bind(this));
  }

  render() {
    const style = {
      transform: this.state.transform
    }
    const wrapClass = classNames('wrap');
    const carouselClass = classNames('carousel');

    return (
      <div className={wrapClass}>
        <div className={carouselClass} style={style}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Carousel;
