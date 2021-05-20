import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const FoodCategoriesContainer = props => {
    console.log(props)
    return (
        <View style={styles.screen}>
            <Text>Categories Page</Text>
            <Button title="Go To Meals Page" onPress={() => {
                // use navigate prop function to navigate to Category Meals page
                props.navigation.navigate({routeName: 'CategoryMeals'})
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FoodCategoriesContainer