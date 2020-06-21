const { RESTDataSource } = require('apollo-datasource-rest');
const { use } = require('./db/userController');
const userApiUrl = "http://localhost:4400"

class UserAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = userApiUrl
    }

    createUser = async ({name, email}) => {
        const user = await this.post('user',{name,email})
        return user
    }
 
    findUser = async(email) => {
        const user = await this.get(`user/${email}`)
        return user
    }

    addRecipeToUser = async (user,recipe) => {
        await this.patch(`user/${user.email}`,{recipe})
        return recipe
    }

    removeRecipeFromUser = async (user, recipe) => {
        console.log(recipe)
        await this.delete(`user/${user.email}`,null,{body:recipe})
        return recipe
    }

}

module.exports = UserAPI