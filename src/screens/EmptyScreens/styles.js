import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default (styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    flexDirection: 'row',
  },
  iconText: {
    color: medmindBlue,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  iconTextBody: {
    color: '#4F4F4F',
    fontSize: 18,
    marginLeft: 50,
    marginRight: 50,
  },
  smallPlus: {
    color: medmindBlue,
    fontSize: 28,
    fontWeight: '600',
  },
}));