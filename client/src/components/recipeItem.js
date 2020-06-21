import React,{useState,useContext} from "react"
import RecipeCardBody from "./recipeCardBody"
import {useMutation} from "@apollo/react-hooks"
import {addRecipe,removeRecipe} from "../ApolloClient/queries"
import {Auth0Context} from "../context/auth0context"
import {userContext} from "../context/userContext"
import {recipeInSavedRecipes} from "../helpers/helper"

const RecipeItem = ({recipe}) => {
    const {user} = useContext(Auth0Context)
    const {savedRecipes} = useContext(userContext)
    const [saved, setSavedStatus] = useState("unsaved")
    const [AddRecipe] = useMutation(addRecipe)
    const [RemoveRecipe] = useMutation(removeRecipe)

    const onSave = () => {
        AddRecipe({variables:{
            recipeId: recipe.recipeId, 
            email:user.email}
        })
        .catch((res) => {
            const errors = res.graphQLErrors.map((error) => {
                console.log(error.message)
            });
        })

        savedRecipes.push(recipe)
        setSavedStatus("saved")
    }

    const onRemove = () => {
        RemoveRecipe({variables:{
            recipeId: recipe.recipeId, 
            email:user.email}
        })
        .catch((res) => {
            const errors = res.graphQLErrors.map((error) => {
                console.log(error.message)
            });
        })
        const index = savedRecipes.indexOf(recipe)
        if(index != -1) {
            savedRecipes.splice(index,1)
        }
        setSavedStatus("unsaved")
    }
    if(saved == "unsaved" && recipeInSavedRecipes(savedRecipes, recipe) == undefined ){
        return(
            <div className="card mt-4" style={{width: "18rem"}}>
                <RecipeCardBody recipe={recipe} eventHandler={onSave} btnText="ADD" />
            </div>
        )
    }
    else {
        return(
            <div className="card mt-4" style={{width: "18rem"}}>
                <RecipeCardBody recipe={recipe} eventHandler={onRemove} btnText="REMOVE" />
            </div>
        )
    }
    
}

export default RecipeItem