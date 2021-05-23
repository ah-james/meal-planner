import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/mealsActions'

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
        default:
            return state
    }
}

export default mealsReducer