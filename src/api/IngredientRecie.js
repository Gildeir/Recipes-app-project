import { useContext } from 'react';
import ContextRecipe from '../provider/ContextRecipe';

function IngredientRecie() {
  const { resultApiID } = useContext(ContextRecipe);

  const ingredients = [
    { ingredient: resultApiID.strIngredient1, measure: resultApiID.strMeasure1 },
    { ingredient: resultApiID.strIngredient2, measure: resultApiID.strMeasure2 },
    { ingredient: resultApiID.strIngredient3, measure: resultApiID.strMeasure3 },
    { ingredient: resultApiID.strIngredient4, measure: resultApiID.strMeasure4 },
    { ingredient: resultApiID.strIngredient5, measure: resultApiID.strMeasure5 },
    { ingredient: resultApiID.strIngredient6, measure: resultApiID.strMeasure6 },
    { ingredient: resultApiID.strIngredient7, measure: resultApiID.strMeasure7 },
    { ingredient: resultApiID.strIngredient8, measure: resultApiID.strMeasure8 },
    { ingredient: resultApiID.strIngredient9, measure: resultApiID.strMeasure9 },
    { ingredient: resultApiID.strIngredient10, measure: resultApiID.strMeasure10 },
    { ingredient: resultApiID.strIngredient11, measure: resultApiID.strMeasure11 },
    { ingredient: resultApiID.strIngredient12, measure: resultApiID.strMeasure12 },
    { ingredient: resultApiID.strIngredient13, measure: resultApiID.strMeasure13 },
    { ingredient: resultApiID.strIngredient14, measure: resultApiID.strMeasure14 },
    { ingredient: resultApiID.strIngredient15, measure: resultApiID.strMeasure15 },
    { ingredient: resultApiID.strIngredient16, measure: resultApiID.strMeasure16 },
    { ingredient: resultApiID.strIngredient17, measure: resultApiID.strMeasure17 },
    { ingredient: resultApiID.strIngredient18, measure: resultApiID.strMeasure18 },
    { ingredient: resultApiID.strIngredient19, measure: resultApiID.strMeasure19 },
    { ingredient: resultApiID.strIngredient20, measure: resultApiID.strMeasure20 }];

  return ingredients;
}

export default IngredientRecie;
