import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_DURATION,
  CHANGE_TITLE,
  DELETE_INGREDIENT,
  DELETE_STEP,
  DELETE_UTENSIL,
  SAVE_INGREDIENT,
  SAVE_STEP,
  SAVE_UTENSIL,
} from '../actions/addRecipe';

const initialState = {
  title: '',
  category: '',
  difficulty: '',
  duration: '',
  ingredientsList: [],
  stepsList: [],
  utensilsList: [],
};

const addRecipeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TITLE: {
      return {
        ...state,
        title: action.newValue,
      };
    }
    case CHANGE_CATEGORY: {
      return {
        ...state,
        category: action.newValue,
      };
    }

    case CHANGE_DIFFICULTY: {
      return {
        ...state,
        difficulty: action.newValue,
      };
    }

    case CHANGE_DURATION: {
      return {
        ...state,
        duration: action.newValue,
      };
    }
    case SAVE_INGREDIENT: {
      const newIngredient = action.newObject;
      return {
        ...state,
        ingredientsList: [...state.ingredientsList, newIngredient],
      };
    }

    case SAVE_STEP: {
      const newStep = action.newObject;
      return {
        ...state,
        stepsList: [...state.stepsList, newStep],
      };
    }

    case SAVE_UTENSIL: {
      const newUtensil = action.newObject;
      return {
        ...state,
        utensilsList: [...state.utensilsList, newUtensil],
      };
    }

    case DELETE_INGREDIENT: {
      const ingredientIdToRemove = parseInt(action.id, 10);

      const updatedIngredients = state.ingredientsList.filter(
        (ingredient) => ingredient.id !== ingredientIdToRemove
      );

      const updatedIngredientsWithIds = updatedIngredients.map(
        (ingredient, index) => ({
          ...ingredient,
          id: index + 1,
        })
      );
      return {
        ...state,
        ingredientsList: updatedIngredientsWithIds,
      };
    }

    case DELETE_STEP: {
      const stepIdToRemove = parseInt(action.id, 10);

      const updatedSteps = state.stepsList.filter(
        (step) => step.id !== stepIdToRemove
      );

      const updatedStepsWithIds = updatedSteps.map((step, index) => ({
        ...step,
        id: index + 1,
      }));
      return {
        ...state,
        stepsList: updatedStepsWithIds,
      };
    }

    case DELETE_UTENSIL: {
      const utensilIdToRemove = parseInt(action.id, 10);

      const updatedUtensils = state.utensilsList.filter(
        (utensil) => utensil.id !== utensilIdToRemove
      );

      const updatedUtensilsWithIds = updatedUtensils.map((utensil, index) => ({
        ...utensil,
        id: index + 1,
      }));
      return {
        ...state,
        utensilsList: updatedUtensilsWithIds,
      };
    }
    default:
      return state;
  }
};

export default addRecipeReducer;
