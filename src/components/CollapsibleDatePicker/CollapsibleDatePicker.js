import React, {Component} from 'react'
import { StyleSheet, View, TouchableOpacity, DatePickerIOS, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';
import PropTypes from 'prop-types';
import moment from 'moment';
import { medmindBlue } from '../../utilities/styles';

export default class CollapsibleDatePicker extends Component {
    static propTypes = {
        setDate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { collapsed: true, chosenDate: moment() };
    }

    datePickerOnPress = () => {
        this.setState({ collapsed: !this.state.collapsed})
    }
  
    setDate = newDate => {
        const date = moment(newDate);
        this.setState({chosenDate: date});
        this.props.setDate(date);
    }

    render() {
        return (
        <View>
            <TouchableOpacity 
            style={styles.form}
            onPress={this.datePickerOnPress}>
                <View style={styles.container}>
                    <Text>
                    {this.props.header}
                    </Text>
                    <Text>
                        {`${this.state.chosenDate.format("ddd, MMM D YYYY, h:mm a")}`}
                    </Text>
                </View>
            </TouchableOpacity>
            <Collapsible 
            collapsed={this.state.collapsed}>
                <View>
                <DatePickerIOS
                date={this.state.chosenDate.toDate()}
                onDateChange={this.setDate}
                />
                </View>
            </Collapsible>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    form: {
        height: 40,
        borderColor: medmindBlue,
        borderBottomWidth: 1,
        marginHorizontal: 20
    }
  });