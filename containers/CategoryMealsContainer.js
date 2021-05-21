import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsContainer = props => {
    // set categoryId using the params passed from CategoriesContainer
    const categoryId = props.navigation.getParam('categoryId')

    // create selected category by using find method on CATEGORIES data set to find when the specific category ID is equal to categoryId variable
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)
    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Single Meal Page" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
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