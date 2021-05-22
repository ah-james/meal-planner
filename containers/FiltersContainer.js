import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors'

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                value={props.state} 
                onValueChange={(newValue) => props.setState(newValue)} trackColor={{true: Colors.secondaryColor}} 
                thumbColor={props.state ? Colors.primaryColor : 'white'} 
            />
        </View>
    )
}

const FiltersContainer = props => {
    const { navigation } = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
            lactoseFree: isLactoseFree,
        }
        console.log(appliedFilters)
    }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree])

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Filter Options</Text>
            <FilterSwitch label="Gluten Free" state={isGlutenFree} setState={setIsGlutenFree} />
            <FilterSwitch label="Vegan" state={isVegan} setState={setIsVegan} />
            <FilterSwitch label="Vegetarian" state={isVegetarian} setState={setIsVegetarian} />
            <FilterSwitch label="Lactose Free" state={isLactoseFree} setState={setIsLactoseFree} />
        </View>
    )
}

FiltersContainer.navigationOptions = navData => {
    return{
        headerTitle: 'Filter Meals',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName="ios-save" onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 14
    },
})

export default FiltersContainer