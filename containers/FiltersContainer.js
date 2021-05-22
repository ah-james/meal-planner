import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FiltersContainer = props => {
    return (
        <View style={styles.screen}>
            <Text>Filter Your Recipies</Text>
        </View>
    )
}

FiltersContainer.navigationOptions = {
    headerTitle: 'Filter Meals'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FiltersContainer