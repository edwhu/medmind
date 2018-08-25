import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import CollapsibleDrugPicker from '../../components/CollapsibleDrugPicker/CollapsibleDrugPicker';
import FormField from '../../components/FormField/FormField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { KeyboardAvoidingView } from 'react-native';

export default class AddDrugScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        title: 'DRUG ENTRY',
    };

    onSubmit = () => {
        console.log('Submitted')
    }

    render() {
        return <KeyboardAvoidingView style={styles.container}>
            <ScreenHeader 
            title={this.state.title}
            fontSize={18}/>
            <FormField
            header='Drug Name'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder='Tylenol'
            />
            <FormField
            header='Dosage'
            onChangeText={(dosage) => this.setState({dosage})}
            value={this.state.dosage}
            placeholder='2 mg'
            />
            <FormField
            header='Doctor'
            onChangeText={(doctor) => this.setState({doctor})}
            value={this.state.doctor}
            placeholder='Dr. Usi'
            />
            <FormField
            header='Dosage'
            onChangeText={(frequency) => this.setState({frequency})}
            value={this.state.frequency}
            placeholder='5x a day'
            />
            <CollapsibleDatePicker 
            header='Start Date'
            setDate={startDate => this.setState({startDate})} 
            />
            <CollapsibleDatePicker 
            header='End Date'
            setDate={endDate => this.setState({endDate})}
            />
            <FormField
            header='Notifications'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder='Notifications'
            />
            <CollapsibleDrugPicker
            setDrugType={drugType => console.log('Drug Type', drugType)}
            />

            <View style={styles.footerStyle}>
                <RoundedButton 
                onPress={this.onSubmit}
                name={'Submit'}
                buttonStyle={styles.buttonStyle}
                />
            </View>
        </KeyboardAvoidingView>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white',
    },
    buttonStyle: { 
        alignSelf: 'center', 
        width: 200,
        height: 40,
    },
    footerStyle: {
        flex: 1,
        // borderColor: 'black',
        // borderWidth: 5,
        height: 80,
        flexGrow: 1,
        justifyContent: 'center',
    }
})