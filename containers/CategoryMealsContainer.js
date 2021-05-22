import React from 'react'
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsContainer = props => {
    const renderMeal = itemData => {
        console.log(itemData)
        return(
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    // set categoryId using the params passed from CategoriesContainer
    const categoryId = props.navigation.getParam('categoryId')

    // filter out meals unrelated to current category
    const filteredMeals = MEALS.filter( 
        // return true if meal's category IDs includes categoryId variable
        // use indexOf because if meal's listed category IDs doesn't include categoryId then index would be -1
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    )

    // create selected category by using find method on CATEGORIES data set to find when the specific category ID is equal to categoryId variable
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    return (
        <View style={styles.screen}>
            <FlatList data={filteredMeals} renderItem={renderMeal} />
        </View>
    )
}

CategoryMealsContainer.navigationOptions = navigationData => {
    // use same variables created in CategoryMealsContainer since they aren't global variables and can't be read here
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CategoryMealsContainer