import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'

const FavoritesContainer = props => {
    const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList filteredMeals={favoriteMeals} navigation={props.navigation} />
}

FavoritesContainer.navigationOptions = navData => {
    return{
        headerTitle: 'Your Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }
}

export default FavoritesContainer