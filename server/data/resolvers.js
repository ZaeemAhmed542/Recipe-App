const { AuthenticationError } = require("apollo-server")

module.exports = {
    Query:{
        recipes: (_,{title},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            return dataSources.RecipeAPI.getAllRecipes(title)
        },
        recipe: (_,{id},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            return dataSources.RecipeAPI.getRecipeById(id)
        },
        findUser: (_,{email},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            return dataSources.UserAPI.findUser(email)
        },
    },
    User:{
        savedRecipes : async (parent,_,{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            const user = await dataSources.UserAPI.findUser(parent.email)
            return user.recipes
        }
    },
    Mutation:{
        createUser: (_,{name,email},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            return dataSources.UserAPI.createUser({name,email})
        },
        addRecipe: async (_,{recipeId,email},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            const user = await dataSources.UserAPI.findUser(email)
            if(user) {
                const recipe = await dataSources.RecipeAPI.getRecipeById(recipeId)
                if(recipe){
                    return await dataSources.UserAPI.addRecipeToUser(user, recipe)
                }
            }
        },
        removeRecipe: async (_,{recipeId,email},{dataSources, token}) => {
            if(!token) throw new AuthenticationError("LOGIN REQUIRED")
            const user = await dataSources.UserAPI.findUser(email)
            if(user) {
                const recipe = await dataSources.RecipeAPI.getRecipeById(recipeId)
                if(recipe){
                    return await dataSources.UserAPI.removeRecipeFromUser(user, recipe)
                }
            }
        }
    }
}
