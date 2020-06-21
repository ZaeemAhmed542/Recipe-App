import React,{useState} from "react" 
import RecipeList from "./recipeList"
const Searchbar = () => {
    
    const [recipeInput, setInput] = useState('')

    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    return(
        <div>
            <div className="container mt-3 d-flex justify-content-center align-items-center">
                <form className="form-inline" onSubmit={onFormSubmit}>
                    <div className="mt-0">
                        <input className="form-control" type="text" value={recipeInput} onChange={onInputChange} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-dark ml-2"  type="submit">Search</button>
                    </div>
                </form>
            </div>
            <RecipeList recipe={recipeInput}/>   
        </div>
    )
}

export default Searchbar