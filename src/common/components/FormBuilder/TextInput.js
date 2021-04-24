// props are
// 1. inputProps: object - all props passed to TextInput of 'react-native'
// 2. label: string - name of the label
// 3. error: bool - to validate the things
// 4. errorMsg: string - to display error message
// 5. rightIcon: string - to display the right icon
// 6. editable: boolean - to toggle between a text input or text
// 7. value: string - value to display 
// 8. rightIconPress: function - action to be performed on right icon onpress
// 9. isGoogleInput:  boolean - is google places input 

import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import GooglePlacesInput from './GooglePlacesInput';

// consts 
import Colors from '../../constants/colors';

function MyTextInput({
    inputProps,
    label,
    error,
    inputKey,
    errorMsg,
    rightIcon,
    editable,
    value,
    rightIconPress,
    isGoogleInput = false
}) {

    return (
        <View style={{ marginTop: 20 }}>
            <View>
                <Text style={styles.label}>{label}</Text>
            </View>
            {
                editable ? (
                    <View style={styles.singleTextInput}>
                        <View style={styles.textInputContainer}>
                            {
                                !isGoogleInput ? (
                                    <TextInput
                                        {...inputProps}
                                        onChangeText={(text) => { inputProps.onChangeText(text, inputKey) }}
                                        style={[
                                            {
                                                borderBottomColor: error ? Colors.danger : Colors.grey,
                                                width: rightIcon ? '90%' : '100%'
                                            },
                                            styles.textInput, inputProps ? inputProps.style : {}
                                        ]}
                                    />
                                ) : (
                                    <GooglePlacesInput
                                        onChangeText={(text) => { inputProps.onChangeText(text, inputKey) }}
                                        borderBottomColor={error ? Colors.danger : Colors.grey}
                                        style={[
                                            {
                                                width: rightIcon ? '90%' : '100%'
                                            },
                                            styles.textInput, inputProps ? inputProps.style : {}
                                        ]}
                                    />
                                )
                            }
                            {
                                rightIcon ? (
                                    <TouchableOpacity
                                        style={[styles.iconContainer, { borderBottomColor: error ? Colors.danger : Colors.grey }]}
                                        activeOpacity={0.4}
                                        onPress={rightIconPress}
                                    >
                                        <FontAwesome
                                            name={rightIcon}
                                        />
                                    </TouchableOpacity>
                                ) : null
                            }
                        </View>
                        {
                            error && <Text style={styles.errorMsg}>{errorMsg}</Text>
                        }
                    </View>
                ) : (
                    <View style={styles.singleTextInput}>
                        <View style={styles.textInputContainer}>
                            <Text style={styles.valueText}>{inputProps?.secureTextEntry ? value.split('').map(_ => '*') : value || ''}</Text>
                            <TouchableOpacity
                                style={[styles.iconEdit]}
                                activeOpacity={0.4}
                                onPress={rightIconPress}
                            >
                                <FontAwesome
                                    name={rightIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default memo(MyTextInput);

const styles = StyleSheet.create({
    textInput: {
        height: 30,
        borderBottomWidth: 2,
        fontSize: 18,
        fontFamily: 'MontSemiBold',
    },
    singleTextInput: {
        marginTop: 10
    },
    label: {
        fontFamily: 'MontMed',
        color: Colors.light,
        fontSize: 15
    },
    errorMsg: {
        color: Colors.danger,
        fontFamily: 'MontReg',
        marginTop: 5
    },
    iconContainer: {
        width: '10%',
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 37
    },
    textInputContainer: {
        flexDirection: 'row',
    },
    iconEdit: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    valueText: {
        width: '90%'
    }
})