import React from 'react';
import {
  asset,
  Animated,
  Text,
  View,
  Image,
  staticResourceURL,
} from 'react-360';
import { connect } from './store';
import styles from './stylesheet';


class LeftPanel extends React.Component {
  state = {
    fade: new Animated.Value(0)
  };


  componentDidMount() {

    Animated.timing(
      this.state.fade,
      {
        toValue: 0.7,
        duration: 4000,
      }
    ).start();
  }

  render() {
    let { fade } = this.state;

    return (
        <View style={{flex: 1, height: 600, borderColor: 'darkgray',
        borderWidth: 1}}>
          <View style={styles.header} style={{height: 125, backgroundColor: '#003459', opacity:0.5}}>
            <Text style={styles.headerText}>Watch Video</Text>
          </View>
          <Image source={asset('youtube-play-bar.png')} style={{width:460, height: 250}}></Image>
          <View style={styles.header} style={{height: 125, backgroundColor: '#003459', opacity:0.5}}>
            <Text style={styles.headerText} ></Text>
          </View>
      </View>
    );
  }
}

const ConnectedLeftPanel = connect(LeftPanel);

export default ConnectedLeftPanel;
