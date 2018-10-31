import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';
import CollapsibleDatePicker from '../../components/CollapsibleDatePicker/CollapsibleDatePicker';
import CollapsibleDrugPicker from '../../components/CollapsibleDrugPicker/CollapsibleDrugPicker';
import FormField from '../../components/FormField/FormField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { KeyboardAvoidingView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { medmindBlue } from '../../utilities/styles';
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
            <ScreenHeader {...this.props} title={this.state.title} />
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

            {/* <View style={styles.form}>
                <View style={styles.fieldContainer}>
                    <Text>Color</Text>
                    <Ionicons name='ios-color-palette' size={32} />
                </View>
                <CollapsibleDrugPicker
                setDrugType={drugType => console.log('Drug Type', drugType)}
                />
            </View> */}

            <View style={styles.form}>
                <View style={styles.fieldContainer}>
                    <Text>Notifications</Text>
                    <Ionicons name='ios-arrow-forward' size={16} />
                </View>
            </View>

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
    },
    form: {
        height: 40,
        borderColor: medmindBlue,
        borderBottomWidth: 1,
        marginHorizontal: 20
    },
    fieldContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})