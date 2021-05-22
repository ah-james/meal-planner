import React from 'react'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesContainer = props => {
    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList filteredMeals={favoriteMeals} navigation={props.navigation} />
}

FavoritesContainer.navigationOptions = {
    headerTitle: 'Your Favorites'
}

export default FavoritesContainer