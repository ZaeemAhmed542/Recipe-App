import React, { useContext, useEffect }  from "react" 
import RecipeItem from "./recipeItem"
import {userContext} from "../context/userContext"

const SavedItems = () => {

    const {savedRecipes} = useContext(userContext)
    if(savedRecipes){
      return(
        <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
          { savedRecipes.length == 0 ? "NO SAVED RECIPE" :
            savedRecipes.map(recipe => <RecipeItem recipe = {recipe} key={recipe.recipeId}/>)
          } 
        </div>
      )
    }
    return(
      <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
        NO SAVED ITEMS
      </div>
    )
}

export default SavedItems