import { Component } from 'react';
import { AsyncStorage } from 'react-native';

export default class StartingComponent extends Component {
    constructor(){
        super();
        this.state = {firstLaunch: null};
    }
    componentDidMount(){
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if(value == null){
                console.log("value was null");
                 AsyncStorage.setItem('alreadyLaunched', true); // No need to wait for `setItem` to finish, although you might want to handle errors
                 this.setState({firstLaunch: true});
            }
            else{
                console.log("value was not null");
                 this.setState({firstLaunch: false});
            }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
    }

    LoadDayView = () => {
        this.props.navigation.navigate("dayViewScreen")
    }

    LoadTermsAndCondistions = () => {
        this.props.navidation.navigate("termsAndConditionsScreen")
    }

    render(){
       if(this.state.firstLaunch === null){
           console.log("made it to the null statement");
           return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
       }else if(this.state.firstLaunch == true){
            this.LoadTermsAndCondistions();
           return null;
       }else{
           this.LoadDayView();
           return null;
       }
    }
}