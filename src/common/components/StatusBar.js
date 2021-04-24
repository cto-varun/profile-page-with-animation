import React from 'react';
import {
    View,
    StatusBar,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
    </View>
);


const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
    }
});