import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoriesContainer = props => {
    // create variable to use in renderItem for FlatList
    const renderGridItem = itemData => {
        return(
            // make each grid item touchable, linked to the CategoryMeals container
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('CategoryMeals', {
                    // set params object with itemData
                    categoryId: itemData.item.id
                })
            }} >
                <View style={styles.gridItem}>
                    {/* place title from CATEGORIES data in Text tag */}
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    )
}

// CategoriesContainer is JS object, so can add property after creation
CategoriesContainer.navigationOptions = {
    // Add title to header
    headerTitle: 'Meal Categories',
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

export default CategoriesContainer