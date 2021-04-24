import React, { useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import StatusBar from '../../common/components/StatusBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// constnats
import colors from '../../common/constants/colors';

// components
import Header from './Header';
import ProfileImage from './ProfileImage';
import TextInput from '../../common/components/FormBuilder/TextInput';

// redux 
import { connect } from 'react-redux';
import { setValues } from '../../redux/actions/ProfileActions';

function Profile(props) {

    let fadeAnim;

    const { values, setValues } = props;

    const valueKeys = Object.keys(values).sort(function (a, b) {
        if (values[a].indexToDisplay < values[b].indexToDisplay) { return -1; }
        if (values[a].indexToDisplay > values[b].indexToDisplay) { return 1; }
        return 0;
    });

    // animating opacity with delay
    function animateInputs(delay) {
        Animated.timing(fadeAnim, {
            toValue: 1, // final opacity
            duration: 400,  // animation duration
            useNativeDriver: true,  // using native driver
            delay: delay * 200  // delay according to indexes of inputs
        }).start()
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <Header />
            <ProfileImage />
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps='always'
                listViewDisplayed={false}
                contentContainerStyle={styles.formContainer}
                style={{
                    flex: 1
                }}
            >
                {
                    valueKeys?.slice()?.map((input, index) => {

                        fadeAnim = useRef(new Animated.Value(0)).current;
                        animateInputs(index);

                        const inputDetail = values[input];
                        return (
                            <Animated.View
                                key={index}
                                style={{
                                    opacity: fadeAnim
                                }}
                            >
                                <TextInput
                                    value={inputDetail.value}
                                    editable={inputDetail.editable}
                                    label={inputDetail?.label || ''}
                                    rightIcon={inputDetail.editable ? 'check-square-o' : 'pencil-square-o'}
                                    inputKey={inputDetail.inputKey}
                                    isGoogleInput={inputDetail?.isGoogleInput}
                                    inputProps={{
                                        placeholder: inputDetail?.placeholder,
                                        onChangeText: (text) => {
                                            handleChange(
                                                text,
                                                inputDetail.inputKey,
                                                inputDetail?.validation
                                            )
                                        },
                                        value: inputDetail.value,
                                        ...inputDetail.inputProps
                                    }}
                                    rightIconPress={() => { handleRightIconPress(inputDetail.inputKey, inputDetail?.validation) }}
                                    error={inputDetail?.error}
                                    errorMsg={inputDetail?.errorMessage}
                                />
                            </Animated.View>
                        )
                    })
                }
            </KeyboardAwareScrollView>
        </View>
    )

    function handleChange(text, key, validation) {

        // check validation
        let validated = true;
        if (validation) {
            validated = validation(text)
        }

        // set values to redux state
        setValues({
            ...values,
            [key]: {
                ...values[key],
                value: text,
                error: validated ? false : true
            }
        })
    }
    function handleRightIconPress(inputKey, validation) {
        let validated = true;

        // check validation
        if (validation) {
            validated = validation(values[inputKey].value)
        }

        // toggle editable if validated or currently not editable
        if (validated || !values[inputKey].editable) {
            let detail = { ...values[inputKey] };
            detail.editable = !detail.editable;
            setValues({
                ...values,
                [inputKey]: {
                    ...values[inputKey],
                    ...detail
                }
            })
        }
    }
}

const mapStateToProps = () => state => ({
    // redux state binding
    values: state.Profile.values
});

const mapDispatchToProps = () => dispatch => ({
    // redux action to setValues
    setValues: (values) => dispatch(setValues(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        minHeight: '100%'
    },
    formContainer: {
        paddingHorizontal: 24,
        paddingBottom: 24
    }
})