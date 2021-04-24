import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

// constants
import DemoImage from '../../../../assets/images/demoProfile.png';
import colors from '../../../common/constants/colors';

export default function ProfileImage() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={DemoImage}
                    resizeMode="cover"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        paddingBottom: 30
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: colors.fourth,
        backgroundColor: colors.secondary,
    },
    iconContainer: {
        padding: 6,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.fourth,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        position: 'absolute',
        right: -15,
        bottom: -15
    }
})