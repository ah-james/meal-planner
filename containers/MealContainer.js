import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFavorite } from '../store/actions/mealsActions'

const ListItem = props => {
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealContainer = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = availableMeals.find(meal => meal.id === mealId)
    const isMealFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const dispatch = useDispatch()

    const handleToggleFavorite = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFavorite: handleToggleFavorite})
    }, [handleToggleFavorite])

    useEffect(() => {
        props.navigation.setParams({isFavorite: isMealFavorite})
    }, [isMealFavorite])

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.detail}>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.duration} Minutes</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => 
                <ListItem key={ingredient}>{ingredient}</ListItem>
            )}
            <Text style={styles.title}>Instructions</Text>
            {selectedMeal.steps.map(step => 
                <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealContainer.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite')
    const isFavorite = navigationData.navigation.getParam('isFavorite')

    return{
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            {/* use Item to describe Icon you want to show */}
            <Item 
                title='Favorite' 
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} 
                onPress={toggleFavorite} />
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10, 
    }
})

export default MealContainer