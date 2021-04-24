import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons
                    name="chevron-back-sharp"
                    size={20}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <View style={styles.headingContainer}>
                <View style={styles.emptyView} />
                <Text style={styles.heading}>Personal Data</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headingContainer: {
        flex: 8,
        flexDirection: 'row'
    },
    heading: {
        fontSize: 16,
        fontFamily: 'MontSemiBold',
        flex: 11.6,
    },
    iconContainer: {
        left: 0,
        flex: 2,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyView: {
        flex: 3,
    }
})