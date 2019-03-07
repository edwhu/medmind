import React, { Component } from "react";
import PropTypes from 'prop-types';
import {StyleSheet} from "react-native";
import ColorPalette from 'react-native-color-palette';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this); //ask how this works

        this.state = {
            value: '#AD2452'
        };
    }

    static propTypes = {
    defaultColor: PropTypes.string.isRequired,
    };
    
    handler(color) {
        this.setState({
            value: color,
        });
    }
    render() {
        return (
            <ColorPalette
                defaultColor={this.props.defaultColor}
                colors={['#AD2452', '#EC4125', '#E1C750', '#39854B', '#4645B1', '#9122A5',
                        '#D82F5A', '#ED662B', '#BECF4A', '#42998A', '#7C80C7', '#785448',
                        '#D52D1F', '#EE9235', '#7AB952', '#3F98E2', '#B497D7', '#616161',
                        '#E57670', '#F4C142', '#53BC81', '#4E7BF0', '#9F60AB', '#CDCDCD']}
                title={"Color"}
                scaleToWindow={true}
                onChange={this.handler}
            />
        );
    }

}

const styles = StyleSheet.create({
    titleStyles: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
        marginVertical: 20,
    }
});