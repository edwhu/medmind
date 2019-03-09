import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { toggleDrugEdit, deleteDrugs } from '../../redux/actions/drug';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 10,
  }
});

class HeaderRight extends React.Component {
  constructor(props) {
    super(props);
  }

  onPress = () => {
    if (this.props.editing) {
      this.props.deleteDrugs();
    }
    this.props.toggleDrugEdit();
  }

  render() {

    return (
      <TouchableOpacity onPress={this.onPress}>
        <View>
          <Text style={styles.text}>
            {this.props.editing ? 'Delete' : 'Edit'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
  editing: state.drugInfoReducer.editing,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleDrugEdit,
  deleteDrugs,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRight);