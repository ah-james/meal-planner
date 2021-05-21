import React from 'react'
import {StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryCard from '../components/CategoryCard'

const CategoriesContainer = props => {
    // create variable to use in renderItem for FlatList
    const renderGridItem = itemData => {
        return(
            <CategoryCard 
            title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={() => {
                // navigate to CategoryMeals from MealsNavigator object
                props.navigation.navigate('CategoryMeals', {
                // set params object with itemData
                categoryId: itemData.item.id
                })
            }} />
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
})

export default CategoriesContainer