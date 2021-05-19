import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CategoryMealsContainer = props => {
    return (
        <View style={styles.screen}>
            <Text>All Meals in a Category Page</Text>
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

export default CategoryMealsContainer