import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  appHeader: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  piano: {
    flexDirection: 'row',
  },
  key: {
    backgroundColor: 'white',
    height: 300,
    width: 60,
    borderRadius: 10,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  flat: {
    backgroundColor: 'black',
    marginLeft: -17,
    marginRight: -17,
    height: 200,
    width: 30,
    borderRadius: 4,
    zIndex: 2,
  },
  keyPressed: {
    backgroundColor: '#00d8ff',
  },
  keyText: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 36,
    marginTop: 240,
  },
});
