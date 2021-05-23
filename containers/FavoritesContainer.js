import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealList from '../components/MealList'
import HeaderButton from '../components/HeaderButton'

const FavoritesContainer = props => {
    const favoriteMeals = useSelector(state => state.meals.meals)

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