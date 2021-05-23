import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import MealCard from './MealCard'

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMeal = itemData => {
        const isFavorite = favoriteMeals.find(meal => meal.id === itemData.item.id)
        return(
            <MealCard 
                title={itemData.item.title} 
                affordability={itemData.item.affordability} 
                complexity={itemData.item.complexity} 
                image={itemData.item.imageUrl} 
                duration={itemData.item.duration}
                onSelect={() => {
                    props.navigation.navigate('MealDetail', {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFavorite: isFavorite,
                    })
                }}
            />
        )
    }

    return(
        <View style={styles.list}>
            <FlatList data={props.filteredMeals} renderItem={renderMeal} style={{width: '95%'}} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MealList