import React from "react" 
import {useQuery} from "@apollo/react-hooks"
import {getRecipes} from "../ApolloClient/queries"
import RecipeItem from "./recipeItem"

const RecipeList = ({recipe}) => {
    const {data, err} = useQuery(getRecipes,{
        variables:{recipe}
    })
    if(data === undefined || err){
        return (
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                NO RECIPE
            </div>
        )
    }
    if(data){
        const recipes = data.recipes
        return(
            <div className="mt-4 d-flex flex-column justify-content-center align-items-center">
                    {recipes.map(recipe => {
                        return(
                            <RecipeItem recipe={recipe} key={recipe.recipeId}/>
                        )
                    })
                }
            </div>
        )
    }
    return <div>LOADING .....</div>
    
    
}

export default RecipeList