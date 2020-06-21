import React from "react"
import Button from "./button"
const RecipeCardBody = ({recipe, eventHandler, btnText}) => {
    return(
        <React.Fragment>
            <img className="card-img-top" src={recipe.imageUrl}/>
            <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.publisher}</p>
                <a href={recipe.sourceUrl} className="btn btn-dark">SOURCE</a>
                <Button onClickHandler={eventHandler} className="btn btn-danger ml-4">{btnText}</Button>
            </div>
        </React.Fragment>
        
    )
}

export default RecipeCardBody