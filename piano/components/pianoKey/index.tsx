import React, {useCallback, useState} from 'react';
import _ from 'lodash';
import {Text, TouchableOpacity} from 'react-native';

import styles from '../../components/pianoKey/styles';

type Props = {
  flatNote: boolean;
  note: string;
  otherBorder: boolean;
};

function PianoKey(props: Props) {
  const {flatNote, note, otherBorder} = props;
  // const [backgroundColor, setBackgroundColor] = useState(new Animated.Value(0));
  const [isPressed, setIsPresssed] = useState(false);

  const handlePressIn = useCallback(() => {
    setIsPresssed(true);
    // Animated.timing(backgroundColor, {
    //   toValue: 1,
    //   duration: 150,
    //   useNativeDriver: true,
    // }).start();
  }, []);

  const handlePressOut = useCallback(() => {
    setIsPresssed(false);
    // Animated.timing(backgroundColor, {
    //   toValue: 0,
    //   duration: 150,
    //   useNativeDriver: true,
    // }).start();
  }, []);

  // const animatedBackgroundColor = backgroundColor.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['white', '#00d8ff'],
  // });

  return (
    <>
      {flatNote && (
        <TouchableOpacity
          style={[
            styles.key,
            styles.flat,
            flatNote ? {zIndex: 1000} : null,
            isPressed ? styles.keyPressed : null,
          ]}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        />
      )}
      {!flatNote && (
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[
            styles.key,
            otherBorder ? {borderLeftWidth: 0} : null,
            isPressed ? styles.keyPressed : null,
          ]}>
          <Text style={styles.keyText}>{note.toUpperCase()}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default PianoKey;
