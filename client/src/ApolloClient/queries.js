import {gql} from "apollo-boost"

export const getRecipes = gql`
  query($recipe:String!){
    recipes(title:$recipe){
      title
      recipeId
      sourceUrl
      imageUrl
      publisher
    }
  }
`

export const createUser = gql`
  mutation($email:String! $name:String!){
    createUser(email:$email name:$name){
      name
      email
    }
  }
`

export const addRecipe = gql`
  mutation($recipeId:ID! $email:String!){
    addRecipe(recipeId:$recipeId email:$email){
      title
    }
  }
`

export const removeRecipe = gql`
mutation($recipeId:ID! $email:String!){
  removeRecipe(recipeId:$recipeId email:$email){
    title
  }
}
`
export const findUser = gql`
  query($email: String!){
    findUser(email:$email){
      savedRecipes{
        recipeId
        title
        sourceUrl
        socialRank
        imageUrl
        publisher
        publisherUrl
      }
    }
  }
` 