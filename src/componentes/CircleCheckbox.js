import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const CircleCheckbox = ({ isChecked, onPress }) => {
    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
            <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#004d85',
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: {
        backgroundColor: '#004d85',
    },
    checkmark: {
        color: '#fff',
    },
});

export default CircleCheckbox;
