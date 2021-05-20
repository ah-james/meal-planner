import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import FoodCategoriesContainer from '../containers/FoodCategoriesContainer'
import CategoryMealsContainer from '../containers/CategoryMealsContainer'
import MealContainer from '../containers/MealContainer'

const MealsNavigator = createStackNavigator({
    Categories: FoodCategoriesContainer,
    CategoryMeals: CategoryMealsContainer,
    MealDetail: MealContainer,
})

export default createAppContainer(MealsNavigator)