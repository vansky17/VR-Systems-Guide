import React from 'react';

const State = {
  index: 0
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      index: State.index
    };

    _listener = () => {
      this.setState({
        index: State.index
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          index={this.state.index}
        />
      );
    }
  };
}
