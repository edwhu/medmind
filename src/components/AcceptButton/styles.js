import { StyleSheet } from 'react-native';
import { medmindBlue } from '../../constants/styles';

export default styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: 266,
        height: 46,
        borderRadius: 30,
        bottom: 24,
        right:30,
        backgroundColor: medmindBlue,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 3, width: 3 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 2, //IOS
        elevation: 10, // Android
    },
    word: {
      color: "white",
      fontSize: 20,
      marginBottom: 6,
      fontWeight: "200"
    }
})