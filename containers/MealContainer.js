import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MealContainer = props => {
    return (
        <View style={styles.screen}>
            <Text>Look At One Meal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealContainer