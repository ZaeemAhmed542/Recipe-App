import ApolloClient from "apollo-boost"

const apolloClient = new ApolloClient({
    uri:"http://localhost:4000/",
    request: (operation) => {
        const token = localStorage.getItem('token')
        operation.setContext({
          headers: {
            authorization: token ? `${token}` : ''
          }
        })
      }
})

export default apolloClient