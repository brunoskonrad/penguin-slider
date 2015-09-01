import React from 'react';
import {Slider, Panel} from '../penguin/penguin';

class App extends React.Component {
  render() {
    var tabs = ['Foo', 'Bar', 'Zar'];

    return (
      <Slider tabs={tabs}>
        <Panel panel={0}>
          <p>Foo</p>
        </Panel>
        <Panel panel={1}>
          <p>Bar</p>
        </Panel>
        <Panel panel={2}>
          <p>Zar</p>
        </Panel>
      </Slider>
    );
  }
}

React.render(<App />,
  document.querySelector('[data-react-app]'));
