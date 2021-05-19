import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FavoritesContainer = props => {
    return (
        <View style={styles.screen}>
            <Text>Your Favorites</Text>
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

export default FavoritesContainer