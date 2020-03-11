import React from 'react';
import {
  Animated,
  asset,
  Image,
  NativeModules,
  Text,
  View,
  VrButton
} from 'react-360';
import { connect } from './store';
import styles from './stylesheet';

const { AudioModule } = NativeModules;

class CenterPanel extends React.Component {
  state = {
    hover: false,
    fade: new Animated.Value(0)
  };

  componentDidMount() {

    Animated.timing(
      this.state.fade,
      {
        toValue: 0.7,
        duration: 2000,
      }
    ).start();
  }

  clickHandler(index) {

    AudioModule.playOneShot({
      source: asset('audio/click.wav'),
      volume: 0.1
    });
  }
  render () {
    let { fade } = this.state;
    return(
      <Animated.View style={[{opacity: fade}, styles.centerPanel]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Product Name</Text>
        </View>
        <View>
         <Image source={asset('img.png')}  style={{width:460, height: 250}}></Image>
        </View>
        <View>
          <VrButton style={styles.buttonRate}>
            <Text style={styles.textSize}>Next</Text>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}
const ConnectedCenterPanel = connect(CenterPanel);

export default ConnectedCenterPanel;