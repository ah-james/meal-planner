import { FA5Style } from '@expo/vector-icons/build/FontAwesome5'
import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/mealsActions'

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            // find index of meal in favoriteMeals where meal ID is equal to the mealID found in action
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            // if existingIndex is true
            if (existingIndex >= 0) {
                // variable equal to array of spread state favorite meals
                const updatedFavoriteMeals = [...state.favoriteMeals]
                // remove favorite meal at existingIndex from array
                updatedFavoriteMeals.splice(existingIndex, 1)
                // create new favoriteMeals that doesn't include existingIndex meal
                return {...state, favoriteMeals: updatedFavoriteMeals }
            } else { // if fav not found and want to add to favorites
                // find meal that you want to add by finding meal where ID is equal to action's mealId
                const meal = state.meals.find(meal => meal.id === action.mealId)
                // spread state, add new favorite meal w/ concat
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS: // update filtered meals to reflect active filters
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                return true
            })
            return { ...state, filteredMeals: updatedFilteredMeals}
        default:
            return state
    }
}

export default mealsReducer