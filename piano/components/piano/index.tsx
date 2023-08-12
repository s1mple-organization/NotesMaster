import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import {NOTES} from '../../constants';
import _ from 'lodash';
import PianoKeyContainer from '../../containers/pianoKeyContainer';

function Piano() {
  const keys = _.map(NOTES, (note, index) => {
    return <PianoKeyContainer key={index} note={note} />;
  });

  // const audioFiles = _.map(NOTES, note => {
  //   const sound = new Sound(
  //     `../../notes/${note}.mp3`,
  //     Sound.MAIN_BUNDLE,
  //     error => {
  //       if (error) {
  //         console.log('failed to load the sound', error);
  //         return;
  //       }
  //       // loaded successfully
  //       console.log(
  //         'duration in seconds: ' +
  //           sound.getDuration() +
  //           'number of channels: ' +
  //           sound.getNumberOfChannels(),
  //       );
  //     },
  //   );
  // });
  return (
    <View style={styles.appHeader}>
      <View style={styles.piano}>{keys}</View>
    </View>
  );
}

export default Piano;
