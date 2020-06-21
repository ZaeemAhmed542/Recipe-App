const { RESTDataSource } = require('apollo-datasource-rest');
const {mapRecipe,extractRecipes, mapRecipes} = require("./helpers")

class RecipeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://forkify-api.herokuapp.com/'
    this.queryAllPrefix = "api/search?q="
    this.querySinglePrefix = "api/get?rId="
  }

  getAllRecipes = async (foodItem) => {
      const recipeQuery =  this.queryAllPrefix.concat(foodItem)
      const recipes = await this.get(recipeQuery)
      return mapRecipes(extractRecipes(recipes))
  }

  getRecipeById = async (recipeId) => {
      const recipeQuery =  this.querySinglePrefix.concat(recipeId)
      const recipe = await this.get(recipeQuery)
      return mapRecipe(extractRecipes(recipe))
  }
  
}

module.exports = RecipeAPI