import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesContainer from '../containers/CategoriesContainer'
import CategoryMealsContainer from '../containers/CategoryMealsContainer'
import MealContainer from '../containers/MealContainer'
import Colors from '../constants/Colors'
import FavoritesContainer from '../containers/FavoritesContainer'
import FiltersContainer from '../containers/FiltersContainer'
import { Ionicons } from '@expo/vector-icons'



const defaultNavOptions = {
    // second argument in createStackNavigator allows you to configure the navigator
    // defaultNavigationOptions sets up options applied to every screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'black',
    }
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
})

// create variable of object to dry up FavoritesTabNavigator
const tabScreenConfig = {
        Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={22} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
        }
        
    },
        Favorites: {screen: FavoritesNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={22} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondaryColor,
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
            activeTintColor: Colors.secondaryColor
        }
    }
)

const MainNavigator = createDrawerNavigator({
    FavTab: FavoritesTabNavigator,
    Filters: FavoritesNavigator
})

export default createAppContainer(FavoritesTabNavigator)