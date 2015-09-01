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

  renderTabs() {
    return this.props.tabs.map((title, index) => {
      const navigationClass = classNames({
        'tab': true,
        'tab--active': this.state.selected == index
      });
      return (
        <li className={navigationClass}
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
