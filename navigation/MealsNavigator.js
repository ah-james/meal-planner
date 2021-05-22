import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesContainer from '../containers/CategoriesContainer'
import CategoryMealsContainer from '../containers/CategoryMealsContainer'
import MealContainer from '../containers/MealContainer'
import Colors from '../constants/Colors'
import FavoritesContainer from '../containers/FavoritesContainer'
import FiltersContainer from '../containers/FiltersContainer'

const defaultNavOptions = {
    // defaultNavigationOptions sets up options applied to every screen
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'black',
}

// Basic Screen Flow Navigator
const MealsNavigator = createStackNavigator({
    // first argument in createStackNavigator is object of screens
    Categories: {
        screen: CategoriesContainer,
    },
    CategoryMeals: {
        screen: CategoryMealsContainer,
    },
    MealDetail: MealContainer,
    }, 
    {
        // second argument in createStackNavigator allows you to configure the navigator
        defaultNavigationOptions: defaultNavOptions
    }
)

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesContainer,
    MealDetail: MealContainer,
}, {
    defaultNavigationOptions: defaultNavOptions
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersContainer
}, {
    defaultNavigationOptions: defaultNavOptions
})

// create variable of object to dry up FavoritesTabNavigator
const tabScreenConfig = {
        Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={22} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals',
        }
    },
        Favorites: {screen: FavoritesNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={22} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites',
        }
    }
}

// FavoritesTabNavigator to create bottom tab bar to shift from recipies to favorites
const FavoritesTabNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.secondaryColor,
        shifting: true,
    })
    : createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold',
            },
            activeTintColor: Colors.secondaryColor
        }
    }
)

const MainNavigator = createDrawerNavigator({
    FavTab: {screen: FavoritesTabNavigator, navigationOptions: {
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)