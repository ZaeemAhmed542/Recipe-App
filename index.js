
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./server/schema');

const RecipeAPI = require("./server/data/recipe");
const UserAPI = require("./server/data/user")

const resolvers = require("./server/data/resolvers")

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context:({req}) => {
        const token = req.headers.authorization
        return {token}
    },
    dataSources:() => ({
        RecipeAPI : new RecipeAPI(),
        UserAPI : new UserAPI()
    })
  }
);


server.listen().then(({url}) => {
    console.log(`server running at ${url}`)
})