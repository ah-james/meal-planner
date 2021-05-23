import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealList from '../components/MealList'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'

const FavoritesContainer = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    if (favoriteMeals.length === 0) {
        return(
            <View style={styles.text}>
                <DefaultText>No Favorite Meals Yet</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesContainer