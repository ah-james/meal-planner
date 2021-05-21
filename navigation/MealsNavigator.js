import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesContainer from '../containers/CategoriesContainer'
import CategoryMealsContainer from '../containers/CategoryMealsContainer'
import MealContainer from '../containers/MealContainer'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesContainer,
    CategoryMeals: CategoryMealsContainer,
    MealDetail: MealContainer,
})

export default createAppContainer(MealsNavigator)