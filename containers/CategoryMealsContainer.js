import React from 'react'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMealsContainer = props => {
    // set categoryId using the params passed from CategoriesContainer
    const categoryId = props.navigation.getParam('categoryId')

    // retreive data from state & return it
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    // filter out meals unrelated to current category
    const displayMeals = availableMeals.filter( 
        // return true if meal's category IDs includes categoryId variable
        // use indexOf because if meal's listed category IDs doesn't include categoryId then index would be -1
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    )

    return <MealList  filteredMeals={displayMeals} navigation={props.navigation} />
}

CategoryMealsContainer.navigationOptions = navigationData => {
    // use same variables created in CategoryMealsContainer since they aren't global variables and can't be read here
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsContainer