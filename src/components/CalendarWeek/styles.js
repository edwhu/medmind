import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  dayColumn: {
    flex:1,
    height: '100%',
    borderColor: '#E0E0E0',
    borderRightWidth: 1,
  },
  date: {
    height: 70,
    borderColor: '#E0E0E0',
    borderBottomWidth: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
  dayNumberText: {
    fontSize: 20,
    marginTop: 15,
  },
  dayText: {
    fontSize: 16,
  },
  drugBarWrapper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 70,
    left: 0,
    marginTop: 30,
  },
});