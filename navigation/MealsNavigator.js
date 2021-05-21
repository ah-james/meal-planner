import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import CategoriesContainer from '../containers/CategoriesContainer'
import CategoryMealsContainer from '../containers/CategoryMealsContainer'
import MealContainer from '../containers/MealContainer'
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
    // first argument in createStackNavigator is object of screens
    Categories: {
        screen: CategoriesContainer,
    },
    CategoryMeals: {
        screen: CategoryMealsContainer,
    },
    MealDetail: MealContainer,
}, {
    // second argument in createStackNavigator allows you to configure the navigator
    // defaultNavigationOptions sets up options applied to every screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'black',
    }
})

export default createAppContainer(MealsNavigator)