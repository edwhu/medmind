import { StyleSheet } from "react-native";
import { medmindBlue } from "../../constants/styles";

export default (styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%',
        flex: 1,
      },
      border: {
        borderLeftWidth: 1,
        borderLeftColor: '#E5E5E5',
      },
      buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: medmindBlue,
        width: '30%' ,
        height: 40 ,
        margin: 10
      },
      text: {
        textAlign: 'center',
        color: 'black'
      },
      columnContainer: {
        flexDirection: 'column',
        width: '33%'
      },
      headerText: {
        fontSize: 14,
        fontWeight: '600',
        flexWrap: 'wrap',
        textAlign: 'center',
      },
      logo: {
        width: 300,
        height: 300
      },
      link: {
        textDecorationLine: 'underline',
        color: 'blue'
      },
    
      greyHeader: {
        color: 'grey',
        margin: 5
      },

      dataStyle: {
        textAlign: 'center',
        fontSize: 15,
      },

      dateStyle: {
        fontSize: 14,
        textAlign: 'right',
        color: '#5B6571',
      },

      nameStyle: {
        fontWeight: '600',
        fontSize: 20,
        margin: 7,
        textAlign: 'left',
      },

      horBorder: {
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        margin: 5,
      },

      vertBorder: {
        borderLeftWidth: 1,
        borderLeftColor: '#E5E5E5',
      },

      patientData: {
        fontSize: 15,
        margin: 5,
      },

      bigHeaderText: {
        fontSize: 15,
        fontWeight: '600',
        margin: 5,
        textAlign: 'center',
      },
      imageStyle: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginLeft: '15.2%'
      }
}));