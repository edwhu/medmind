import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    top: 0
    // marginBottom: 30
    // bottom: 20,
  },
  dayColumn: {
    flex: 1,
    height: '100%',
    borderColor: '#E0E0E0',
    borderRightWidth: 1
  },
  date: {
    height: 70,
    borderColor: '#E0E0E0',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  dayNumberText: {
    fontSize: 20,
    marginTop: 15
  },
  dayText: {
    fontSize: 16
  },
  scrollWrapper: {
    // height: '100%',
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    flex: 1
  },
  drugBarWrapper: {
    backgroundColor: 'transparent',
    paddingTop: 30
  },
  barBackground: {
    backgroundColor: 'white'
  }
}));
