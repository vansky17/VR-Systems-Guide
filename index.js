import React from 'react';
import {
  Animated,
  asset,
  AppRegistry,
  View,
} from 'react-360';
import ConnectedRightPanel from './rightPanel';
import ConnectedLeftPanel from './leftPanel';
import ConnectedCenterPanel from './CenterPanel';
import { connect } from './store';
import Entity from 'Entity';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export class MainModel extends React.Component {
  state = {
    rotation: new Animated.Value(0),
    bounceValue: new Animated.Value(0.5)
  }

  bounce({value, initial, toValue, friction = 1.5}) {
    value.setValue(initial);

    Animated.spring(
      value, {
        toValue,
        friction,
      }
    ).start();
  }

  componentDidMount() {
    Animated.loop(Animated.timing(
      this.state.rotation,
      {
        toValue: 360,
        duration: 11000,
      }
    )).start();
  }

  render() {
    return (
      <View>
      </View>
    );
  }
};

const ConnectedMainModel = connect(MainModel);

AppRegistry.registerComponent('ConnectedLeftPanel', () => ConnectedLeftPanel);
AppRegistry.registerComponent('ConnectedRightPanel', () => ConnectedRightPanel);
AppRegistry.registerComponent('ConnectedCenterPanel', () => ConnectedCenterPanel);
AppRegistry.registerComponent('ConnectedMainModel', () => ConnectedMainModel);
