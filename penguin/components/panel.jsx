import React from 'react';
import classNames from 'classnames';

class Panel extends React.Component {
  render() {
    const panelStyle = {
      order: this.props.panel
    };
    const panelClass = classNames('panel');
    return (
      <div style={panelStyle} className={panelClass}>
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
