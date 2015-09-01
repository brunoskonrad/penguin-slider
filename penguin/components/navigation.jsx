import React from 'react';
import classNames from 'classnames';
import PenguinStore from '../store/penguin-store';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  tabClick(index) {
    this.setState({selected: index});
    PenguinStore.emitTabChange(index);
  }

  getStyle() {
    const tabsLength = this.props.tabs.length;
    return {
      width: `${100 / (tabsLength > 3 ? 3.5 : tabsLength)}%`
    };
  }

  renderTabs() {
    return this.props.tabs.map((title, index) => {
      const navigationClass = classNames({
        'tab': true,
        'tab--active': this.state.selected == index
      });
      return (
        <li className={navigationClass} style={this.getStyle()}
          onClick={this.tabClick.bind(this, index)}
          key={index}>
          {title}
        </li>
      );
    });
  }

  render() {
    return (
      <nav>
        <ul className="navigation">
          {this.renderTabs()}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
