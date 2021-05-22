import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealCard from './MealCard'

const MealList = props => {

    const renderMeal = itemData => {
        return(
            <MealCard 
                title={itemData.item.title} 
                affordability={itemData.item.affordability} 
                complexity={itemData.item.complexity} 
                image={itemData.item.imageUrl} 
                duration={itemData.item.duration}
                onSelect={() => {
                    props.navigation.navigate('MealDetail', {
                        mealId: itemData.item.id
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