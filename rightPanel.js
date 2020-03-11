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

class RightPanel extends React.Component {
  state = {
    count: 0,
    hover: false,
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
  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
    if (this.state.count >= 5){
      this.setState({count: 0});
    }
    AudioModule.playOneShot({
      source: asset('audio/click.wav'),
      volume: 0.1
    });
  };
  clickHandler(index) {

    AudioModule.playOneShot({
      source: asset('audio/click.wav'),
      volume: 0.1
    });
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={[{opacity: fade},styles.rightPanel]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Information</Text>
        </View>
        <View>
          <View>
            <Image source={asset('lcd.png')} style={{width: 150, height: 75, marginLeft: 75}}></Image>
          </View>
          <Text style={styles.textSize}>
            Resolution: 2880 x 1700 
          </Text>
          <Text style={styles.textSize}>
            Pixels per Degree: 14
          </Text>
          <Text style={styles.textSize}>
            Refresh Rate: 90 Hz
          </Text>
          <Text style={styles.textSize}>
            Field of View: 110°
          </Text> 
          <Text style={styles.textSize}>
            Tracking: Inside-Out/Base Staions
          </Text>
          <Text style={styles.textSize}>
            Price: $699/$799/$999
          </Text>
        </View>
        <View>
          <Text >Rating: {this.state.count}</Text>
          <VrButton onClick={this._incrementCount} style={styles.buttonRate}><Text>Rate</Text></VrButton>
          <VrButton style={styles.buttonRate}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={() => this.clickHandler(this.props.index)}>
            <Text style={styles.buttonRate}>Save Rating</Text>
          </VrButton>
        </View>
      </Animated.View>
    );
  }
}

const ConnectedRightPanel = connect(RightPanel);

export default ConnectedRightPanel;
