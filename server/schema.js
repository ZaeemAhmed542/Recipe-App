const {gql} = require('apollo-server')

const typeDefs = gql`

   type Recipe{
        publisher: String!,
        title: String!,
        sourceUrl: String!,
        recipeId: ID!,
        imageUrl: String!,
        socialRank: String!,
        publisherUrl: String!
    }

    type User{
        name:String!,
        email:String!,
        savedRecipes:[Recipe!]
    }

    type Query{
       recipes(title:String!):[Recipe]
       recipe(id:ID!):Recipe
       findUser(email:String!):User
       savedRecipe(email:String!):[Recipe]
    }    

    type Mutation{
       createUser(name:String!,email:String!):User
       addRecipe(recipeId:ID!,email:String!):Recipe
       removeRecipe(recipeId:ID!,email:String!):Recipe
    }

`

module.exports = typeDefs