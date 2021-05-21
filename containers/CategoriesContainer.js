import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

// create variable to use in renderItem for FlatList
const renderGridItem = itemData => {
    return(
        <View style={styles.gridItem}>
            {/* place title from CATEGORIES data in Text tag */}
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const FoodCategoriesContainer = props => {
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
})

export default FoodCategoriesContainer