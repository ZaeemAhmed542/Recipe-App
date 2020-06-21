const mapRecipes = (recipes) => {
    return recipes.map(recipe => {
        return {
            publisher: recipe.publisher,
            title: recipe.title,
            sourceUrl: recipe.source_url,
            recipeId: recipe.recipe_id,
            imageUrl: recipe.image_url,
            socialRank: recipe.social_rank,
            publisherUrl: recipe.publisher_url
        }
    });
}

const mapRecipe = (recipe) => ({
    publisher: recipe.publisher,
    title: recipe.title,
    sourceUrl: recipe.source_url,
    recipeId: recipe.recipe_id,
    imageUrl: recipe.image_url,
    socialRank: recipe.social_rank,
    publisherUrl: recipe.publisher_url
})

const extractRecipes = (Recipes) => {
    return Array.isArray(Recipes.recipes) ? Recipes.recipes : Recipes.recipe
}



module.exports = {
    mapRecipes,
    mapRecipe,
    extractRecipes
}