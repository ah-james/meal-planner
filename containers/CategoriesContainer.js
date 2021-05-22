import React from 'react'
import {StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import CategoryCard from '../components/CategoryCard'
import HeaderButton from '../components/HeaderButton'



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
CategoriesContainer.navigationOptions = navData => {
    return{
        // Add title to header
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            < Item title="Menu" iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoriesContainer