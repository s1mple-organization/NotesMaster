import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PianoContainer from './piano/components/piano';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <PianoContainer />
    </SafeAreaView>
  );
}

export default App;
